import { createStore as _createStore, applyMiddleware, compose, Store, StoreEnhancer } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import promiseMiddleware from 'redux-promise';
import { History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { RootStore } from 'redux/types/store';

export const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: true,
});

export function createStore(history: History, reducer: any) {
  const middleware = [sagaMiddleware, routerMiddleware(history), promiseMiddleware, logger];

  return _createStore(
    reducer,
    composeWithDevTools(
      compose(
        applyMiddleware(...middleware),
      ) as StoreEnhancer<{}>,
    ),
  ) as Store<RootStore>;
}
