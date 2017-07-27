import { createReducer } from 'utils/createReducer';
import {
  handleModalAction, openEditor, closeEditor, handleConfirmModalAction
} from "modules/actions";
import { IModal } from "interfaces/index";

/**
 * Initial state for modal reducer
 */
const initialState: IModal = {
  type: "",
  title: "",
  text: "",
  itemId: "",
  isOpen: false,
  callback: ""
};

export default createReducer({
  [handleModalAction]: ( state: any, payload: IModal ) => ({
    ...state,
    ...payload,
    isOpen: !state.isOpen
  }),
  [openEditor]: ( state: any ) => ({
    ...state,
    isEditorOpen: true
  }),
  [closeEditor]: ( state: any ) => ({
    ...state,
    isEditorOpen: false
  }),
  [handleConfirmModalAction]: ( state: any ) => ({
    ...state,
    isConfirmModalOpen: !state.isConfirmModalOpen
  })
}, initialState);
