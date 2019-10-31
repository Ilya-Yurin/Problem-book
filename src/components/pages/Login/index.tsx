import React from 'react';
import { RouteComponentProps } from 'react-router';
import LoginForm from './Form';
import {
  StyledLoginPage,
  StyledLoginContainer,
  StyledLoginContent,
  StyledTitleText,
  StyledTitle
} from 'components/pages/Login/styled';

const LoginPage: React.FC<RouteComponentProps<any>> = () => {
  return (
    <StyledLoginPage>
      <StyledLoginContainer>
        <StyledLoginContent md={{ span: 8, offset: 8 }}>
          <StyledTitle>
            <StyledTitleText>Sign in</StyledTitleText>
          </StyledTitle>
          <LoginForm />
        </StyledLoginContent>
      </StyledLoginContainer>
    </StyledLoginPage>
  );
};

export default React.memo(LoginPage);
