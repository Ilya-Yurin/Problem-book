import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import { clearTaskData } from "redux/modules/tasks/actions";
import { useErrorNotification } from 'components/domain/hooks';
import { taskErrorSelector } from "redux/modules/tasks/selectors";
import TaskForm from 'components/domain/tasks/Form';
import { StyledWrapper, StyledContent } from 'components/domain/tasks/NewTask/styled';

const NewTask: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  useErrorNotification(useSelector(taskErrorSelector));
  useEffect(() => {
    dispatch(clearTaskData());
  }, []);

  return (
    <StyledWrapper>
      <StyledContent>
        <TaskForm />
      </StyledContent>
    </StyledWrapper>
  );
};

export default React.memo(NewTask);
