import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import { clearTaskData } from "redux/modules/tasks/actions";
import { useErrorNotification } from 'components/domain/hooks';
import { taskSelector, taskErrorSelector } from "redux/modules/tasks/selectors";
import TaskForm from 'components/domain/tasks/Form';
import { Task } from "components/domain/tasks/types";
import { goToPath } from "utils/navigator";
import { StyledWrapper, StyledContent } from 'components/domain/tasks/EditTask/styled';

const EditTask: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const dispatch = useDispatch();
  const task: Task = useSelector(taskSelector);
  useErrorNotification(useSelector(taskErrorSelector));

  useEffect(() => {
    if (task.id !== parseInt(match.params.id, 10)) {
      dispatch(clearTaskData());
      goToPath('/tasks/new');
    }
  }, [match]);

  return (
    <StyledWrapper>
      <StyledContent>
        <TaskForm />
      </StyledContent>
    </StyledWrapper>
  );
};

export default React.memo(EditTask);
