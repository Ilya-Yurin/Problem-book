import { all } from 'redux-saga/effects';
import { saga as tasksSaga } from 'redux/modules/tasks/saga';
import { saga as sessionSaga } from 'redux/modules/session/saga';

export default function* rootSaga() {
  yield all([
    tasksSaga(),
    sessionSaga(),
  ]);
}
