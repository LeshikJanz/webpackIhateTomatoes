import { popUpSaga } from './DraftModal/sagas';
import { knowledgeSaga } from "./jqueryCloud/sagas";
import { headerSaga } from "./header/sagas";
import { cloudSaga } from "./CloudManager/sagas";

export default function* rootSaga() {
  yield [
    popUpSaga(),
    cloudSaga(),
    knowledgeSaga(),
    headerSaga()
  ]
}
