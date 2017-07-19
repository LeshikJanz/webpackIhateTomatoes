import { popUpSaga } from './DraftModal/sagas';
import { knowledgeSaga } from "./jqueryCloud/sagas";
import { headerSaga } from "./header/sagas";
import { trelloSaga } from "./CloudBoard/sagas";

export default function* rootSaga() {
  yield [
    popUpSaga(),
    knowledgeSaga(),
    headerSaga(),
    trelloSaga()
  ]
}
