import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tasks from 'redux/modules/tasks/reducer';
import session from 'redux/modules/session/reducer';
import { RootStore } from "./types/store";

export default combineReducers<RootStore>({
  tasks,
  routing,
  session,
});
