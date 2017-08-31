import { createReducer } from 'utils/createReducer';
import { ICloud, IGridItem } from "interfaces/index";
import { getCloudsDone, getCloudsInit, handleZoom, updateLayout, updateSky } from "../actions";
import { createCloudDone } from "../../actions";
import { DEFAULT_ZOOM } from "../constants/index";

/**
 * Initial state for sky reducer
 */
const initialState = {
  clouds: [],
  layout: [],
  zoom: DEFAULT_ZOOM
};

export default createReducer({
    [getCloudsInit]: (state: any, payload: ICloud[]) => ({
      ...state,
      clouds: initialState.clouds
    }),
    [getCloudsDone]: (state: any, payload: ICloud[]) => ({
      ...state,
      ...payload
    }),
    [updateLayout]: (state: any, payload: IGridItem) => ({
      ...state,
      layout: payload
    }),
    [createCloudDone]: (state: any, payload: ICloud) => ({
      ...state,
      clouds: [
        payload,
        ...state.clouds
      ]
    }),
    [handleZoom]: (state: any, payload: number) => ({
      ...state,
      zoom: payload
    })
  },
  initialState
);
