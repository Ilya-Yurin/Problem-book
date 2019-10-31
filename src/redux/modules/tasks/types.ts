import { Task } from "components/domain/tasks/types";

export type TaskDataList = {
  data: Task[];
  total: number;
}
export type TaskStore = {
  data: {
    list: TaskDataList;
    selected: Task;
  };
  loading: boolean;
  err: string;
};
