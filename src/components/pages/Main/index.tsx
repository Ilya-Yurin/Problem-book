import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import PrivateRoute from 'components/permissions/PrivateRoute';
import EditTask from 'components/domain/tasks/EditTask/';
import NewTask from 'components/domain/tasks/NewTask/';
import TaskList from 'components/domain/tasks/TaskList/';
import Login from 'components/pages/Login/';
import NotFound404 from 'components/pages/NotFound';
import Header from './navigation/Header';
import { StyledPageWrapper, RouteSpecificContent } from './styled';

const Main: React.FC<RouteComponentProps> = ({ match }) => (
  <StyledPageWrapper>
    <Header />
    <RouteSpecificContent>
      <Switch>
        <Route path="/" exact={true} component={TaskList} />
        <Route path="/login" component={Login} />
        <Route path="/tasks/new" exact={true} component={NewTask} />
        <PrivateRoute path="/tasks/:id" exact={true} component={EditTask} />
        <Route component={NotFound404} />
      </Switch>
    </RouteSpecificContent>
  </StyledPageWrapper>
);

export default React.memo(Main);
