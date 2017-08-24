import { combineReducers } from "redux";
import Cloud from "./src/modules/Cloud/components/JqueryCloud/reducers/knowledgeReducer";
import Modal from "./src/modules/DraftModal/reducers/modalReducer";
import Knowledge from "./src/modules/DraftModal/reducers/knowledgeReducer";
import Users from "./src/modules/Users/reducers/userReducer";
import Filter from "./src/modules/Cloud/components/JqueryCloud/reducers/filterReducer";
import Board from "./src/modules/Board/reducers/lists";
import Auth from "./src/modules/Main/reducers/authReducer";
import Loading from "./src/components/Spinner/reducers/loadingReducer";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  Auth,
  Cloud,
  Modal,
  Knowledge,
  Board,
  Users,
  Filter,
  Loading,
  form: formReducer
});
