import { popUpSaga } from './popUpModal/sagas';
import { cloudSaga } from "./jqueryCloud/sagas";

export default function* rootSaga() {
  yield [
    popUpSaga(),
    cloudSaga()
  ]
}
