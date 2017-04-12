import { combineReducers } from "redux";
import Cloud from "modules/jqueryCloud/reducers/cloudReducer";
import Modal from "modules/popUpModal/reducers/modalReducer";
import Knowledge from "modules/popUpModal/reducers/knowledgeReducer";

export default combineReducers({
  Cloud,
  Modal,
  Knowledge
});
