import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import EditTask from 'src/components/domain/tasks/EditTask/';
import NewTask from 'src/components/domain/tasks/NewTask/';
import TaskList from 'src/components/domain/tasks/TaskList/';
import Login from 'src/components/pages/Login/';
import NotFound404 from 'src/components/pages/NotFound';
import { StyledMainPage, StyledPageWrapper, RouteSpecificContent } from './styled';

const Main: React.FC<RouteComponentProps> = ({ match }) => (
  <StyledMainPage>
    <StyledPageWrapper>
      <RouteSpecificContent>
        <Switch>
          <Route path="/" exact={true} component={TaskList} />
          <Route path="/login" component={Login} />
          <Route path="/tasks/new" exact={true} component={NewTask} />
          <Route path="/tasks/:id" exact={true} component={EditTask} />
          <Route component={NotFound404} />
        </Switch>
      </RouteSpecificContent>
    </StyledPageWrapper>
  </StyledMainPage>
);

export default React.memo(Main);
