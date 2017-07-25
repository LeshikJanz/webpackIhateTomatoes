import { popUpSaga } from './DraftModal/sagas';
import { knowledgeSaga } from "./Cloud/components/JqueryCloud/sagas";
import { headerSaga } from "./Main/header/sagas";
import { trelloSaga } from "./Board/sagas";
import { loginSaga } from "./Main/sagas";
import { registrationSaga } from "./Registration/sagas";

/**
 * Function combines sagas
 */
export default function* rootSaga() {
  yield [
    popUpSaga(),
    knowledgeSaga(),
    headerSaga(),
    trelloSaga(),
    loginSaga(),
    registrationSaga()
  ]
}
