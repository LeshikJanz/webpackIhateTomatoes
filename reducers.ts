import { combineReducers } from "redux";
import Cloud from "./src/modules/Cloud/components/JqueryCloud/reducers/knowledgeReducer";
import Modal from "./src/modules/DraftModal/reducers/modalReducer";
import Knowledge from "./src/modules/DraftModal/reducers/knowledgeReducer";
import Trello from "./src/modules/Board/reducers/lists";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  routing: routerReducer,
  Cloud,
  Modal,
  Knowledge,
  Trello,
  form: formReducer,
  toastr: toastrReducer
});
