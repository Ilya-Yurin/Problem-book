import React from 'react';
import { RouteComponentProps } from 'react-router';
import { StyledLogin } from 'src/components/pages/Login/styled';

const LoginPage: React.FC<RouteComponentProps<any>> = () => {
  return (
    <StyledLogin>
      {'Sign in'}
    </StyledLogin>
  );
};

export default React.memo(LoginPage);
