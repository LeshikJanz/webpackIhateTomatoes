import { combineReducers } from "redux";
import Cloud from "./src/modules/jqueryCloud/reducers/cloudReducer";
import Modal from "./src/modules/DraftModal/reducers/modalReducer";
import Knowledge from "./src/modules/DraftModal/reducers/knowledgeReducer";
import Trello from "./src/modules/Trello/reducers/lists";
import Authorisation from "./src/modules/Login/reducers/loginReducer";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  routing: routerReducer,
  Cloud,
  Modal,
  Knowledge,
  Trello,
  Authorisation
});
