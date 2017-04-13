import { popUpSaga } from './popUpModal/sagas';

export default function* rootSaga() {
  yield [
    popUpSaga()
  ]
}
