import { takeEvery, all, call, AllEffect, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga'
import Cookies from "js-cookie";
import { createSaga, successSaga } from 'redux/modules/helpers';
import { REQUEST } from 'redux/modules/constants';
import { MAKE_LOGIN, CHECK_SESSION, MAKE_LOGOUT } from 'redux/modules/session/constants';
import { IAction } from "redux/types/store";
import { goToPath } from "utils/navigator";
import { ProblemApiService } from "api/services";
import { SessiontData } from "api/types/index";
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';

export const makeLoginSaga = createSaga(MAKE_LOGIN, function* (action: IAction<FormData>): SagaIterator {
  const data: SessiontData = yield call([ProblemApiService.path('/login'), 'post'] as any, action.payload) || [];
  Cookies.set('pb-token', data.token);
  yield call(
    successSaga,
    MAKE_LOGIN,
    data.token,
  );
  goToPath('/');
});

export const checkSessionSaga = createSaga(CHECK_SESSION, function* (): SagaIterator {
  const token: string | null = Cookies.get('pb-token') || null;
  if (isEmpty(token) || isNil(token))
  {
    yield put({ type: `${MAKE_LOGOUT}${REQUEST}` })
  }
  yield call(
    successSaga,
    CHECK_SESSION,
  );
});

export const makeLogoutSaga = createSaga(MAKE_LOGOUT, function* (): SagaIterator {
  Cookies.remove('pb-token');
  yield call(
    successSaga,
    MAKE_LOGOUT,
  );
});

export const saga = function* (): IterableIterator<AllEffect<any>> {
  yield all([
    takeEvery(`${MAKE_LOGIN}${REQUEST}`, makeLoginSaga),
    takeEvery(`${MAKE_LOGOUT}${REQUEST}`, makeLogoutSaga),
    takeEvery(`${CHECK_SESSION}${REQUEST}`, checkSessionSaga),
  ]);
};
