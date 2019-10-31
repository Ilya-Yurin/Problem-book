import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { RootStore } from "./types/store";
import tasks from 'redux/modules/tasks/reducer';
import session from 'redux/modules/session/reducer';

export default combineReducers<RootStore>({
  tasks,
  routing,
  session,
});
