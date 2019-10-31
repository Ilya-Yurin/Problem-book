import { persistStore } from 'redux-persist'
import saga from 'redux/saga';
import { History, createBrowserHistory } from 'history';
import { createStore, sagaMiddleware } from 'redux/util/createStore';
import reducer from 'redux/reducer';

export const history: History = createBrowserHistory();
export const store = createStore(history, reducer);
export const persistor = persistStore(store);

sagaMiddleware.run(saga);
