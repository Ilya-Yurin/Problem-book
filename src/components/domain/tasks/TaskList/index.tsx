import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, selectTask } from "redux/modules/tasks/actions";
import { useErrorNotification } from 'components/domain/hooks';
import { totalTasksSelector, taskErrorSelector, taskLoadingSelector, normalizedTaskListSelector } from "redux/modules/tasks/selectors";
import { Icon } from 'antd';
import { SorterResult } from "antd/lib/table";
import List from './List';
import DefaultLink from 'components/common/Link';
import { Direction, SortField } from "api/types/index";
import { Task } from "components/domain/tasks/types";
import {
  StyledWrapper,
  StyledContent,
  StyledTaskList,
  StyledListHeader,
  StyledAddButton
} from './styled';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(0);
  const [sort_direction, setSortDirection] = useState<Direction>('desc');
  const [sort_field, setSortField] = useState<SortField>('id');
  const total: number = useSelector(totalTasksSelector);
  const dataList = useSelector(normalizedTaskListSelector);
  const isLoading: boolean = useSelector(taskLoadingSelector);
  useErrorNotification(useSelector(taskErrorSelector));

  const changeTable = useCallback(
    (page: any, filter: any, sort: SorterResult<any>) => {
      setSortField(`${sort.columnKey}` as SortField);
      setSortDirection(sort.order === 'ascend' ? 'asc' : 'desc');
    },
    [dispatch]
  );

  const onRowClick = useCallback(
    (row: Task) => ({
      onClick: () => dispatch(selectTask(row)),
    }), []
  );

  useEffect(() => {
    dispatch(fetchTasks({ page, sort_direction, sort_field }));
  }, [page, sort_direction, sort_field]);

  return (
    <StyledWrapper>
      <StyledContent>
        <StyledListHeader>
          <DefaultLink to="/tasks/new">
            <StyledAddButton><Icon type="plus" />Создать задачу</StyledAddButton>
          </DefaultLink>
        </StyledListHeader>
        <StyledTaskList>
          <List dataSource={dataList}
                total={total}
                changeTable={changeTable}
                changePage={setPage}
                isLoading={isLoading}
                onRow={onRowClick}
          />
        </StyledTaskList>
      </StyledContent>
    </StyledWrapper>
  );
};

export default React.memo(TaskList);
