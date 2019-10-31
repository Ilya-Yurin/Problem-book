import React from 'react';
import { Table, Pagination } from 'antd';
import { SorterResult, TableEventListeners } from "antd/lib/table";
import { Task } from "components/domain/tasks/types";
import { columns } from './columns';
import {
  StyledListWrapper,
  StyledPaginationWrapper
} from './styled';

type ListProps = {
  dataSource: Task[],
  total: number;
  isLoading: boolean;
  changeTable(page: any, filter: any, sort: SorterResult<any>): void;
  changePage(page: number): void;
  onRow(record: Task, index: number): TableEventListeners;
}

const List: React.FC<ListProps> = ({ dataSource, total, changeTable, changePage, isLoading, onRow }) => (
  <StyledListWrapper>
    <Table rowKey="id"
      columns={columns}
      dataSource={dataSource}
      onChange={changeTable}
      loading={isLoading}
      pagination={false}
      onRow={onRow}
    />
    <StyledPaginationWrapper>
      <Pagination total={total} onChange={changePage} pageSize={3} />
    </StyledPaginationWrapper>
  </StyledListWrapper>
);

export default React.memo(List);
