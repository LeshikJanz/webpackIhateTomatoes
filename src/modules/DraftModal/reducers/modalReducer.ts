import { createReducer } from 'utils/createReducer';
import { changeModalStatus, changeOptionsStatus } from "../../actions";

const initialState = {
  isModalOpen: false,
  isOptionsOpen: false,
}

export default createReducer({
  [changeModalStatus]: (state: any) => ({
    ...state,
    isModalOpen: !state.isModalOpen
  }),
  [changeOptionsStatus]: (state: any) => ({
    ...state,
    isOptionsOpen: !state.isOptionsOpen
  })
}, initialState);
