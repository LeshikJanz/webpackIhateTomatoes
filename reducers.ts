import { combineReducers } from "redux";
import Cloud from "modules/jqueryCloud/reducers/cloudReducer";
import Modal from "modules/DraftModal/reducers/modalReducer";
import Knowledge from "modules/DraftModal/reducers/knowledgeReducer";
import Trello from "modules/Trello/reducers/lists";
import Authorisation from "modules/Login/reducers/loginReducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  routing: routerReducer,
  Cloud,
  Modal,
  Knowledge,
  Trello,
  Authorisation
});
