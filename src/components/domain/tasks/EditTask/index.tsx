import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { StyledPage } from 'src/components/domain/tasks/EditTask/styled';

const GroupCard: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  return (
    <StyledPage>
      { `Edit task ${match.params.id}` }
    </StyledPage>
  );
};

export default React.memo(GroupCard);
