import { combineReducers } from "redux";
import Cloud from "modules/jqueryCloud/reducers/cloudReducer";
import Modal from "modules/DraftModal/reducers/modalReducer";
import Knowledge from "modules/DraftModal/reducers/knowledgeReducer";

export default combineReducers({
  Cloud,
  Modal,
  Knowledge
});
