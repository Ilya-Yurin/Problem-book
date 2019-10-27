import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { StyledPage } from 'src/components/domain/tasks/NewTask/styled';

const NewTask: React.FC<RouteComponentProps> = () => {
  return (
    <StyledPage>
      {'New task'}
    </StyledPage>
  );
};

export default React.memo(NewTask);
