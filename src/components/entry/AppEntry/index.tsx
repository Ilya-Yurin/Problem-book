import React from 'react';
import { hot } from 'react-hot-loader';
import { StyledAppEntry } from 'src/components/entry/AppEntry/styled';

const AppEntry: React.FC<any> = React.memo(props => (
  <StyledAppEntry>
  </StyledAppEntry>
));

export default hot(module)(AppEntry);
