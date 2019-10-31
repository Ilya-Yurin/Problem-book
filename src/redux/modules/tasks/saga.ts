import { takeEvery, all, call, AllEffect, select, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga'
import { createSaga, successSaga } from 'redux/modules/helpers';
import { REQUEST } from 'redux/modules/constants';
import { FETCH_TASK_LIST, CREATE_TASK, UPDATE_TASK, SELECT_TASK, CLEAR_TASK } from 'redux/modules/tasks/constants';
import { CHECK_SESSION } from "redux/modules/session/constants";
import { IAction } from "redux/types/store";
import { goToPath } from "utils/navigator";
import { ProblemApiService } from "api/services";
import { ListParams, ListData } from "api/types/index";
import { Task } from "components/domain/tasks/types";
import propOr from 'ramda/es/propOr';
import { selectedTaskIdSelector } from "./selectors";
import { showSuccessNotification } from "utils/notifications";
import { isAuthSelector } from "../session/selectors";

export const fetchAllTaskSaga = createSaga(FETCH_TASK_LIST, function* (action: IAction<ListParams>): SagaIterator {
  const data: ListData = yield call(ProblemApiService.get as any, action.payload);
  yield call(
    successSaga,
    FETCH_TASK_LIST,
    { list: data.tasks, total: data.total_task_count },
  );
});

export const createTaskSaga = createSaga(CREATE_TASK, function* (action: IAction<FormData>): SagaIterator {
  yield call([ProblemApiService.path('/create'), 'post'] as any, action.payload);
  showSuccessNotification('', 'Создана новая задача');
  yield call(
    successSaga,
    CREATE_TASK,
  );
  goToPath('/');
});

export const editTaskSaga = createSaga(UPDATE_TASK, function* (action: IAction<FormData>): SagaIterator {
  const taskId: number = yield select(selectedTaskIdSelector);
  yield put({ type: `${CHECK_SESSION}${REQUEST}` });
  yield call([ProblemApiService.path(`/edit/${taskId}`), 'securePost'] as any, action.payload);
  showSuccessNotification('', 'Задача отредактирована');
  yield call(
    successSaga,
    UPDATE_TASK,
  );
  goToPath('/');
});

export const selectTaskSaga = createSaga(SELECT_TASK, function* (action: IAction<Task>): SagaIterator {
  const taskId: number = propOr(null, 'id')(action.payload);
  yield call(
    successSaga,
    SELECT_TASK,
    action.payload
  );
  taskId && goToPath(`/tasks/${taskId}`);
});

export const clearTaskSaga = createSaga(CLEAR_TASK, function* (): SagaIterator {
  yield call(
    successSaga,
    CLEAR_TASK,
  );
});

export const saga = function* (): IterableIterator<AllEffect<any>> {
  yield all([
    takeEvery(`${FETCH_TASK_LIST}${REQUEST}`, fetchAllTaskSaga),
    takeEvery(`${CREATE_TASK}${REQUEST}`, createTaskSaga),
    takeEvery(`${UPDATE_TASK}${REQUEST}`, editTaskSaga),
    takeEvery(`${SELECT_TASK}${REQUEST}`, selectTaskSaga),
    takeEvery(`${CLEAR_TASK}${REQUEST}`, clearTaskSaga),
  ]);
};
