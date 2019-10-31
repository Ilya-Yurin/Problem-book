import styled from 'utils/styled';
import { Row, Col } from 'antd';

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
   background-color: #E3E8F0;
    & > * {
      margin: auto 16px auto 16px;
    }
`;

export const StyledLoginContainer = styled(Row)``;

export const StyledLoginContent = styled(Col)`
  padding: 22px 20px;
  background: white;
  box-shadow: rgba(75, 141, 235, 0.2) 0px 3px 4px;
`;

export const StyledTitleText = styled.div`
  text-align: center;
`;

export const StyledTitle = styled.h3`
  font-size: 22px;
  line-height: 25px;
  color: #343a3e;
  margin-bottom: 25px;
`;

