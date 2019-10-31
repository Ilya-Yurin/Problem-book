import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Login from 'components/pages/Login';
import Main from 'components/pages/Main';
import { StyledAppEntry, GlobalStyle } from 'components/entry/AppEntry/styled';

const AppEntry: React.FC<any> = React.memo(props => (
  <StyledAppEntry>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Main} />
    </Switch>
    <GlobalStyle />
  </StyledAppEntry>
));

export default hot(module)(AppEntry);
