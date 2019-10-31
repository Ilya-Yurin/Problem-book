import styled from 'utils/styled';
import { Tag } from 'antd';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #FFFFFF;
  height: 50px;
  min-height: 50px;
  box-shadow: 0px 0px 20px #DDE9FB;
  padding: 0 16px;
`;

export const HeaderHead = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTail = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 50px;
  }

  & > *:last-child {
    margin-right: 0;
  }
  
  .ant-tag {
    font-size: 14px;
    margin-right: 16px;
    padding: 2px 12px;
  }
`;

export const StyledLogout = styled.div`
  cursor: pointer;
`;

export const StyledTitle = styled(Tag)``;
