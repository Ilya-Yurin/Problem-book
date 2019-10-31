import { TaskStore } from 'redux/modules/tasks/types';
import { RouterState } from "react-router-redux";
import { SessionStore } from 'redux/modules/session/types';

export interface RootStore {
  tasks: TaskStore;
  routing: RouterState;
  session: SessionStore;
}

export interface Action<T> {
  type: string;
  payload?: T | null;
}
