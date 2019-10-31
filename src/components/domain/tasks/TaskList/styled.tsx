import styled from 'utils/styled';
import { Button } from 'antd';

export const StyledWrapper = styled.div`
  flex: 1;
`;

export const StyledContent = styled.section`
  padding: 22px 20px;
  flex: 1 1 0;
  background: white;
  box-shadow: rgba(75, 141, 235, 0.2) 0px 3px 4px;
`;

export const StyledTaskList = styled.div``;

export const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;

export const StyledAddButton = styled(Button)`
  font-size: 12px;
  padding: 6px 15px;
`;

export const StyledEmptyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 270px;
`;

export const StyledEmptyText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 270px;
`;
