import { combineReducers } from "redux";
import Cloud from "./src/modules/Cloud/components/JqueryCloud/reducers/knowledgeReducer";
import Modal from "./src/modules/DraftModal/reducers/modalReducer";
import Knowledge from "./src/modules/DraftModal/reducers/knowledgeReducer";
import Users from "./src/modules/Users/reducers/userReducer";
import Filter from "./src/modules/Cloud/components/JqueryCloud/reducers/filterReducer";
import Trello from "./src/modules/Board/reducers/lists";
import Auth from "./src/modules/Main/reducers/authReducer";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  routing: routerReducer,
  Auth,
  Cloud,
  Modal,
  Knowledge,
  Trello,
  Users,
  Filter,
  form: formReducer,
  toastr: toastrReducer
});
