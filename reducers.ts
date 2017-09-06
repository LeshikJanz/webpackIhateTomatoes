import { combineReducers } from "redux";
import Cloud from "modules/Cloud/components/JqueryCloud/reducers/knowledgeReducer";
import Modal from "modules/DraftModal/reducers/modalReducer";
import Knowledge from "modules/DraftEditor/reducers/knowledgeReducer";
import Users from "modules/Users/reducers/userReducer";
import Filter from "modules/Cloud/components/JqueryCloud/reducers/filterReducer";
import Loading from "components/Spinner/reducers/loadingReducer";
import Sky from 'modules/Sky/reducers/skyReducer';
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  routing: routerReducer,
  Sky,
  Cloud,
  Modal,
  Knowledge,
  Users,
  Filter,
  Loading,
  form: formReducer
});
