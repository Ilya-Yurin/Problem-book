import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Login from 'src/components/pages/Login';
import Main from 'src/components/pages/Main';
import { StyledAppEntry } from 'src/components/entry/AppEntry/styled';

const AppEntry: React.FC<any> = React.memo(props => (
  <StyledAppEntry>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Main} />
    </Switch>
  </StyledAppEntry>
));

export default hot(module)(AppEntry);
