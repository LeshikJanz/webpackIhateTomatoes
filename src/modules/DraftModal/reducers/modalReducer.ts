import { createReducer } from 'utils/createReducer';
import {
  handleModalAction, openEditor, closeEditor
} from "modules/actions";

/**
 * Initial state for modal reducer
 */
const initialState = {
  isModalOpen: false,
  isEditorOpen: false,
  isOptionsOpen: false,
}

export default createReducer({
  [handleModalAction]: ( state: any ) => ({
    ...state,
    isModalOpen: !state.isModalOpen
  }),
  [openEditor]: ( state: any ) => ({
    ...state,
    isEditorOpen: true
  }),
  [closeEditor]: ( state: any ) => ({
    ...state,
    isEditorOpen: false
  })
}, initialState);
