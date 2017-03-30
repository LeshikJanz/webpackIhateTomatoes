import { combineReducers } from "redux";
import Cloud from "modules/jqueryCloud/reducers/cloudReducer";
import Modal from "modules/popUpModal/reducers/modalReducer";

export default combineReducers({
  Cloud,
  Modal
});
