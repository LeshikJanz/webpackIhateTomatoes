import { combineReducers } from "redux";
import Cloud from "modules/Cloud/components/JqueryCloud/reducers/knowledgeReducer";
import Modal from "modules/DraftModal/reducers/modalReducer";
import Knowledge from "modules/DraftModal/reducers/knowledgeReducer";
import Users from "modules/Users/reducers/userReducer";
import Filter from "modules/Cloud/components/JqueryCloud/reducers/filterReducer";
import Board from "modules/Board/reducers/lists";
import Auth from "modules/Main/reducers/authReducer";
import Loading from "components/Spinner/reducers/loadingReducer";
import Sky from 'modules/Sky/reducers/skyReducer';
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
  Sky,
  form: formReducer
});
