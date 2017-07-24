import { popUpSaga } from './DraftModal/sagas';
import { knowledgeSaga } from "./Cloud/components/JqueryCloud/sagas";
import { headerSaga } from "./Main/components/header/sagas";
import { trelloSaga } from "./Board/sagas";

export default function* rootSaga() {
  yield [
    popUpSaga(),
    knowledgeSaga(),
    headerSaga(),
    trelloSaga()
  ]
}
