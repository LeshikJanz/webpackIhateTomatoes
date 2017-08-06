import { put, takeEvery, select } from 'redux-saga/effects'
import {
  fetchCloudGroups, updateCloudById, addNewCloud, addNewCloudGroup, deleteCloudGroup,
  deleteCloud, updateCloudGroupById
} from "api/cloud";
import {
  updateCloud, createCloudInit, createCloudError,
  createCloudGroupInit, createCloudGroupError, createCloudGroupDone, createCloudDone, fetchCloudError,
  updateCloudGroupInit
} from "../actions";
import { ICloudGroup, ICloud, IUser } from "interfaces/index";
import { Task } from "redux-saga";
import { NotificationManager } from 'react-notifications';
import {
  deleteCloudGroupInit, deleteCloudGroupDone, deleteCloudGroupError, deleteCloudInit,
  deleteCloudDone, deleteCloudError, sortClouds, getCloudGroupsInit, getCloudGroupsDone, getCloudGroupsError,
  sortCloudGroups, updateAccountInit
} from "./actions";
import { getUserById } from "../../api/auth";

export const getCloudFromState: any = (state): any => state.form.cloudForm.values;

export const getCloudGroupFormFromState: any = (state): any => state.form.cloudGroupForm.values;

export const getCloudGroupsFromState: any = (state): any => state.Board.lists;

/**
 * Fetching cloud groups with appropriate clouds
 *
 * @param {any} action - { payload: { accountId: string, sort: boolean } }
 *
 * @returns {Iterator<Object | Task>}
 */
export function* fetchCloudGroupList( action? ): Iterator<Object | Task> {
  try {
    const cloudGroups: ICloudGroup[] = yield fetchCloudGroups(action && action.payload && action.payload.accountId);

    // if(action && action.payload && action.payload.sort) {
    //   // TODO: figure out with sorting cloud groups
    //   // yield put(sortCloudGroups(cloudGroups));
    // } else {
    //   yield put({ type: 'GET_CLOUD_GROUPS_DONE', cloudGroups, isFetching: true });
    // }

    yield put({ type: 'GET_CLOUD_GROUPS_DONE', cloudGroups, isFetching: true });

    yield put(getCloudGroupsDone);
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(getCloudGroupsError(error));
  }
}

export function* sortCloudGroupsSaga({ payload }): Iterator<Object | Task> {
  let cloudGroups = payload.map(l => {
      if ( (l.cloudOrders && l.clouds) && l.clouds.length === l.cloudOrders.length ) {
        l.clouds = l.cloudOrders.reduce((sum, co, index) => sum.concat(l.clouds.find(cl => cl.id == co)), []);
      }
      return l;
    }
  );

  const user: IUser = yield getUserById(localStorage.getItem('UserId'));

  if ( user.cloudGroupOrders ) {
    cloudGroups = [...user.cloudGroupOrders.map(co => cloudGroups.find(cg => cg.id == co)), ...cloudGroups];
    cloudGroups = cloudGroups.filter((item, pos) => cloudGroups.indexOf(item) === pos);
  }

  yield put({ type: 'GET_CLOUD_GROUPS_DONE', cloudGroups, isFetching: true });
}

export function* updateCloudSaga({ payload }: ICloud): Iterator<Object | Task> {
  try {
    yield updateCloudById(payload.id, payload);
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(fetchCloudError(error));
  }
}

export function* updateCloudGroupSaga({ payload }: ICloudGroup): Iterator<Object | Task> {
  try {
    yield updateCloudGroupById(payload.id, payload);
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(fetchCloudError(error));
  }
}

export function* createCloudSaga(): Iterator<Object | Task> {
  try {
    const Cloud = yield select(getCloudFromState);
    Cloud.accountId = localStorage.getItem('UserId');

    let newCloudGroup: ICloudGroup = {
      name: Cloud.cloudGroup.value,
      cloudOrders: [],
      accountId: localStorage.getItem('UserId')
    };

    //If entered custom cloud group name
    if ( !Cloud.cloudGroup.id ) {
      newCloudGroup = yield addNewCloudGroup(newCloudGroup);
    }

    yield addNewCloud(Cloud.cloudGroup.id || newCloudGroup.id, Cloud);
    yield put(getCloudGroupsInit());
    NotificationManager.success(`The cloud ${Cloud.name} has been successfully created`, 'Success!');
    yield put(createCloudDone());
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createCloudError(error));
  }
}

export function* createCloudGroupSaga(): Iterator<Object | Task> {
  try {
    const CloudGroup: ICloudGroup = {
      ...(yield select(getCloudGroupFormFromState)),
      accountId: localStorage.getItem('UserId'),
      cloudOrders: []
    };

    yield addNewCloudGroup(CloudGroup);
    yield put(getCloudGroupsInit({ sort: true }));

    NotificationManager.success(`The cloud group ${CloudGroup.name} has been successfully created`, 'Success!');
    yield put(createCloudGroupDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createCloudGroupError(error));
  }
}

function* updateCloudGroupOrders() {
  const cloudGroups = yield select(getCloudGroupsFromState);
  const user = {
    id: localStorage.getItem('UserId'),
    cloudGroupOrders: cloudGroups.reduce((sum, c: ICloudGroup) => sum.concat(c.id), [])
  };

  yield put(updateAccountInit(user));
}

export function* deleteCloudGroupSaga({ payload }: string): Iterator<Object | Task> {
  try {
    yield deleteCloudGroup(payload);
    NotificationManager.success(`The cloud group has been successfully deleted`, 'Success!');

    yield put(getCloudGroupsInit({ sort: true }));
    yield updateCloudGroupOrders();

    yield put(deleteCloudGroupDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(deleteCloudGroupError(error));
  }
}

export function* deleteCloudSaga({ payload }: string): Iterator<Object | Task> {
  try {
    yield deleteCloud(payload);
    NotificationManager.success(`The cloud has been successfully deleted`, 'Success!');
    yield put(getCloudGroupsInit({ sort: true }));
    yield put(deleteCloudDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(deleteCloudError(error));
  }
}

export function* trelloSaga() {
  yield [
    takeEvery(getCloudGroupsInit().type, fetchCloudGroupList),
    takeEvery(updateCloud().type, updateCloudSaga),
    takeEvery(createCloudInit().type, createCloudSaga),
    takeEvery(createCloudGroupInit().type, createCloudGroupSaga),
    takeEvery(deleteCloudGroupInit().type, deleteCloudGroupSaga),
    takeEvery(deleteCloudInit().type, deleteCloudSaga),
    takeEvery(updateCloudGroupInit().type, updateCloudGroupSaga),
    takeEvery(sortCloudGroups().type, sortCloudGroupsSaga),
  ]
}