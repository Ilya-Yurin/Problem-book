import { createActionCreator } from 'redux/modules/helpers';
import { ListParams } from "api/types/index";
import { Task } from "components/domain/tasks/types";
import { FETCH_TASK_LIST, CREATE_TASK, UPDATE_TASK, SELECT_TASK, CLEAR_TASK } from "./constants";

/**
 * Action Creators
 *
 * */
export const fetchTasks = createActionCreator<ListParams>(FETCH_TASK_LIST);
export const createTask = createActionCreator<FormData>(CREATE_TASK);
export const updateTask = createActionCreator<FormData>(UPDATE_TASK);
export const selectTask = createActionCreator<Task>(SELECT_TASK);
export const clearTaskData = createActionCreator(CLEAR_TASK);
