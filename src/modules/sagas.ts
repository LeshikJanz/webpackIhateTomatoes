import { popUpSaga } from './popUpModal/sagas';
import { cloudSaga } from "./jqueryCloud/sagas";
import { headerSaga } from "./header/sagas";

export default function* rootSaga() {
  yield [
    popUpSaga(),
    cloudSaga(),
    headerSaga()
  ]
}
