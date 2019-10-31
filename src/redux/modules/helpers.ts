import { ERROR, REQUEST, START, SUCCESS } from 'redux/modules/constants';
import { call, put } from 'redux-saga/effects';

/**
 * Wrapper for Action Creator
 *
 * @param type - Action
 */
export function createActionCreator<T>(type: string) {
  return function (payload?: T) {
    return {
      payload,
      type: `${type}${REQUEST}`,
    };
  };
}

/**
 * A wrapper for creating a Saga with an Action process lifecycle
 *
 * @param actionName action name
 * @param cb callback
 */
export function createSaga(actionName: string, cb :any) {
  return function* (action: any) {
    try {
      yield put({
        type: `${actionName}${START}`,
      });
      yield call(cb, action);
    } catch (err) {
      yield put({
        type: `${actionName}${ERROR}`,
        payload: err.message,
      });
    }
  };
}

/**
 * Creating a Saga when data is successfully retrieved from API
 *
 * @param actionName - action name
 * @param payload
 */
export const successSaga = function* (actionName: string, payload: any = null) {
  yield put({
    payload,
    type: `${actionName}${SUCCESS}`,
  });
};
