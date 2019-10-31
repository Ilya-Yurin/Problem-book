import { Task } from "components/domain/tasks/types";

export type Direction = 'asc' | 'desc';
export type SortField = 'id' | 'username' | 'email' | 'status';

export type ListParams = {
  sort_field: SortField
  sort_direction: Direction;
  page: number;
}
export type ListData = {
  tasks: Task[];
  total_task_count: string;
}

export type SessiontData = {
  token: string;
}

export type DataResponse = {
  status: string;
  message: { [key: string]: any };
}

export type APIResponse = {
  config: { [key: string]: any };
  data?: DataResponse;
  headers: { [key: string]: any };
  status: number;
  statusText: string;
}

export type ApiOptions = {
  [key: string]: any;
}