import { Reducer } from 'redux';
import storage from 'redux-persist/lib/storage';
import { PersistConfig, persistReducer, Storage } from 'redux-persist';

export const sessionPersistConfig: PersistConfig = {
  storage: storage as Storage,
  key: 'session',
  whitelist: ['token'],
};

export default (reducer: Reducer) => persistReducer(sessionPersistConfig, reducer);
