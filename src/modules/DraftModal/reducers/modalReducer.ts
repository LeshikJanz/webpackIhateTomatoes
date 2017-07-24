import { createReducer } from 'utils/createReducer';
import {
  handleModalAction, changeOptionsStatus, handleEditorAction, openModal, closeModal,
  openEditor, closeEditor
} from "../../actions";

const initialState = {
  isModalOpen: false,
  isEditorOpen: false,
  isOptionsOpen: false,
}

export default createReducer({
  [handleModalAction]: (state: any) => ({
    ...state,
    isModalOpen: !state.isModalOpen
  }),
  [openEditor]: (state: any) => ({
    ...state,
    isEditorOpen: true
  }),
  [closeEditor]: (state: any) => ({
    ...state,
    isEditorOpen: false
  }),
  [changeOptionsStatus]: (state: any) => ({
    ...state,
    isOptionsOpen: !state.isOptionsOpen
  })
}, initialState);
