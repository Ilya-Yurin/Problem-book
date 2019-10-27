import React from 'react';
import { StyledTaskList } from './styled';

const TaskList: React.FC = () => {

  return (
    <StyledTaskList>
      {'Problem List'}
    </StyledTaskList>
  );
};

export default React.memo(TaskList);
