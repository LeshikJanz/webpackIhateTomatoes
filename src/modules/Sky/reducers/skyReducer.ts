import { createReducer } from 'utils/createReducer';
import { ICloud } from "interfaces/index";
import { getCloudsDone, handleZoom } from "../actions";
import { createCloudDone } from "../../actions";
import { DEFAULT_ZOOM } from "../constants/index";

/**
 * Initial state for sky reducer
 */
const initialState = {
  clouds: [],
  zoom: DEFAULT_ZOOM
};

export default createReducer({
    [getCloudsDone]: (state: any, payload: ICloud[]) => ({
      ...state,
      clouds: payload
    }),
    [createCloudDone]: (state: any, payload: ICloud) => ({
      ...state,
      clouds: [
        ...state.clouds,
        payload
      ]
    }),
    [handleZoom]: (state: any, payload: number) => ({
      ...state,
      zoom: payload
    })
  },
  initialState
);
