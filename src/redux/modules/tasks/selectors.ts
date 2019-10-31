import { createSelector } from 'reselect';
import { RootStore } from 'redux/types/store';
import { Task } from "components/domain/tasks/types";
import map from 'ramda/es/map';

export const totalTasksSelector = (state: RootStore): number => state.tasks.data.list.total;
export const taskListTasksSelector = (state: RootStore): Task[] => state.tasks.data.list.data;
export const taskSelector = (state: RootStore): Task => state.tasks.data.selected;
export const taskLoadingSelector = (state: RootStore): boolean => state.tasks.loading;
export const taskErrorSelector = (state: RootStore): string => state.tasks.err;

export const normalizedTaskListSelector = createSelector(taskListTasksSelector, taskList => (
  map((task: Task) => ({ ...task, statusLabel: task.status === 10 ? 'Выполнено' : 'Не выполнено' }), taskList)
));

export const selectedTaskIdSelector = createSelector(taskSelector, task => (task.id));
