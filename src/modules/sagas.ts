import { popUpSaga } from './DraftModal/sagas';
import { knowledgeSaga } from "./jqueryCloud/sagas";
import { headerSaga } from "./header/sagas";
import { trelloSaga } from "./Board/sagas";

export default function* rootSaga() {
  yield [
    popUpSaga(),
    knowledgeSaga(),
    headerSaga(),
    trelloSaga()
  ]
}
