import { createReducer } from 'utils/createReducer';
import { changeModalStatus } from "../../actions";

const initialState = {
  isModalOpen: false
}

export default createReducer({
  [changeModalStatus]: (state: any) => ({
    ...state,
    "isModalOpen": !state.isModalOpen
  })
}, initialState);
