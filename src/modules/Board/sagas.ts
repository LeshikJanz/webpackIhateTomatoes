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
import { getListsStart } from "./actions/lists";
import { NotificationManager } from 'react-notifications';
import {
  deleteCloudGroupInit, deleteCloudGroupDone, deleteCloudGroupError, deleteCloudInit,
  deleteCloudDone, deleteCloudError
} from "./actions";
import { getUserById } from "../../api/auth";
import { loginDone } from "../Main/actions";

export const getCloudFromState: any = (state): any => state.form.cloudForm.values;

export const getCloudGroupFromState: any = (state): any => state.form.cloudGroupForm.values;

/**
 * Fetching cloud groups with appropriate clouds
 *
 * @param {string} payload - user id
 *
 * @returns {Iterator<Object | Task>}
 */
export function* fetchCloudGroupList({ payload }?: string): Iterator<Object | Task> {
  try {
    const user: IUser = yield getUserById(localStorage.getItem('UserId'));
    yield put(loginDone(user));
    let lists: ICloudGroup[] = (yield fetchCloudGroups(payload))
      .map(l => {
          if ( (l.cloudOrders && l.clouds) && l.clouds.length === l.cloudOrders.length ) {
            l.clouds = l.cloudOrders.reduce((sum, co, index) => sum.concat(l.clouds.find(cl => cl.id == co)), []);
          }
          return l;
        }
      );

    if ( user.cloudGroupOrders ) {
      lists = [...user.cloudGroupOrders.map(co => lists.find(cg => cg.id == co)), ...lists];
      lists = lists.filter((item, pos) => lists.indexOf(item) === pos);
    }

    yield put({ type: 'GET_LISTS', lists, isFetching: true });
  } catch (error) {
    NotificationManager.error(error.message, 'Error!');
    yield put(fetchCloudError(error));
  }
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
    let newCloudGroup: ICloudGroup = {
      name: Cloud.cloudGroup.value,
      cloudOrders: [],
      accountId: localStorage.getItem('UserId')
    };

    Cloud.accountId = localStorage.getItem('UserId');

    //If entered custom cloud group name
    if ( !Cloud.cloudGroup.id ) {
      newCloudGroup = yield addNewCloudGroup(newCloudGroup);
    }

    yield addNewCloud(Cloud.cloudGroup.id || newCloudGroup.id, Cloud);
    yield put(getListsStart());
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
      ...(yield select(getCloudGroupFromState)),
      accountId: localStorage.getItem('UserId'),
      cloudOrders: []
    };

    yield addNewCloudGroup(CloudGroup);
    yield put(getListsStart());

    NotificationManager.success(`The cloud group ${CloudGroup.name} has been successfully created`, 'Success!');
    yield put(createCloudGroupDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(createCloudGroupError(error));
  }
}

export function* deleteCloudGroupSaga({ payload }: string): Iterator<Object | Task> {
  try {
    yield deleteCloudGroup(payload);
    NotificationManager.success(`The cloud group has been successfully deleted`, 'Success!');

    yield put(getListsStart());
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
    yield put(getListsStart());
    yield put(deleteCloudDone());
  } catch ({ error }) {
    NotificationManager.error(error.message, 'Error!');
    yield put(deleteCloudError(error));
  }
}

export function* trelloSaga() {
  yield [
    takeEvery(getListsStart().type, fetchCloudGroupList),
    takeEvery(updateCloud().type, updateCloudSaga),
    takeEvery(createCloudInit().type, createCloudSaga),
    takeEvery(createCloudGroupInit().type, createCloudGroupSaga),
    takeEvery(deleteCloudGroupInit().type, deleteCloudGroupSaga),
    takeEvery(deleteCloudInit().type, deleteCloudSaga),
    takeEvery(updateCloudGroupInit().type, updateCloudGroupSaga),
  ]
}