import { TaskStore } from "./types";
import { START, SUCCESS, ERROR } from 'redux/modules/constants';
import { CREATE_TASK, FETCH_TASK_LIST, UPDATE_TASK, SELECT_TASK, CLEAR_TASK } from 'redux/modules/tasks/constants';
import { Task } from "components/domain/tasks/types";
import persistor from 'redux/modules/tasks/persistor';

const initialState: TaskStore = {
  data: {
    list: {
      data: [] as Task[],
      total: 0
    },
    selected: {} as Task,
  },
  loading: false,
  err: '',
};

const reducer = (state: TaskStore = initialState, action: any): TaskStore => {
  const { type } = action;

  switch (type) {
    case `${FETCH_TASK_LIST}${START}`:
      return { ...state, loading: true, err: '' };
    case `${FETCH_TASK_LIST}${SUCCESS}`:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          list: {
            data: action.payload.list as Task[],
            total: parseInt(action.payload.total, 10)
          },
          selected: {} as Task,
        }, err: ''
      };

    case `${SELECT_TASK}${START}`:
      return { ...state, loading: true, err: '' };
    case `${SELECT_TASK}${SUCCESS}`:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          selected: action.payload
        },
        err: ''
      };

    case `${CREATE_TASK}${START}`:
      return { ...state, loading: true, err: '' };
    case `${CREATE_TASK}${SUCCESS}`:
      return { ...state, loading: false, err: '' };

    case `${UPDATE_TASK}${START}`:
      return { ...state, loading: true, err: '' };
    case `${UPDATE_TASK}${SUCCESS}`:
      return { ...state, loading: false, err: '' };

    case `${CLEAR_TASK}${START}`:
      return { ...state, loading: true, err: '' };
    case `${CLEAR_TASK}${SUCCESS}`:
      return {
        data: {
          list: {
            data: [] as Task[],
            total: 0
          },
          selected: {} as Task,
        },
        loading: false,
        err: '',
      };

    case `${FETCH_TASK_LIST}${ERROR}`:
    case `${CREATE_TASK}${ERROR}`:
    case `${UPDATE_TASK}${ERROR}`:
    case `${SELECT_TASK}${ERROR}`:
    case `${CLEAR_TASK}${ERROR}`:
      return { ...state, loading: false, err: action.payload };

    default:
      return state;
  }
};


export default persistor(reducer);