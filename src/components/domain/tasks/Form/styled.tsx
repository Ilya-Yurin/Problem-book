import styled from 'utils/styled';
import { Row, Col, Form } from 'antd';

export const OverflowWrapper = styled.div`
  overflow-y: scroll;
  height: 100%;
`;

export const TaskFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledRow = styled(Row)`
  margin-left: -8px;
  margin-right: -8px;
`;
export const StyledCol = styled(Col)`
  padding-left: 8px;
  padding-right: 8px;
`;

export const StyledFormItem = styled(Form.Item)`
  .ant-form-item-label {
    label {
      display: flex;
      line-height: 1.5;
      font-size: 10px;
      color: #405269;

      &:after {
        display: none;
      }

      &:before {
        order: 1;
      }
    }
  }
`;

export const StyledControlButtons = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 32px;
`;
