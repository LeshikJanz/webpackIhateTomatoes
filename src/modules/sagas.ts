import { popUpSaga } from './DraftModal/sagas';
import { knowledgeSaga } from "./Cloud/components/JqueryCloud/sagas";
import { headerSaga } from "./Main/header/sagas";
import { loginSaga } from "./Main/sagas";
import { registrationSaga } from "./Registration/sagas";
import { usersSaga } from "./Users/sagas";
import { editorSaga } from "./DraftEditor/sagas";
import { skySaga } from "./Sky/sagas";
import { profileSaga } from "./Profile/sagas";

/**
 * Function combines sagas
 */
export default function* rootSaga() {
  yield [
    popUpSaga(),
    knowledgeSaga(),
    headerSaga(),
    skySaga(),
    loginSaga(),
    registrationSaga(),
    usersSaga(),
    editorSaga(),
    profileSaga()
  ]
}
