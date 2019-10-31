import { Reducer } from 'redux';
import storage from 'redux-persist/lib/storage';
import { PersistConfig, persistReducer, Storage } from 'redux-persist';

export const taskPersistConfig: PersistConfig = {
  storage: storage as Storage,
  key: 'tasks',
  whitelist: ['data'],
};

export default (reducer: Reducer) => persistReducer(taskPersistConfig, reducer);
