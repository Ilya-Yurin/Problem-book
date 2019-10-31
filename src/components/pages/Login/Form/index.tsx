import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useErrorNotification } from 'components/domain/hooks';
import forEachObjIndexed from 'ramda/es/forEachObjIndexed';
import { makeLogin } from "redux/modules/session/actions";
import { loginErrorSelector, sessionLoadingSelector } from "redux/modules/session/selectors";
import { Form, Input, Button } from 'antd';
import { WrappedFormUtils } from "antd/lib/form/Form";
import DefaultLink from 'components/common/Link';
import { StyledLoginForm, StyledFormItem, StyledCol, StyledRow, StyledControlButtons } from './styled';

export type LoginFormProps = {
  form: WrappedFormUtils;
};

const LoginForm: React.FC<LoginFormProps> = ({ form }) => {
  const dispatch = useDispatch();
  const { getFieldDecorator } = form;
  const isLoading: boolean = useSelector(sessionLoadingSelector);
  useErrorNotification(useSelector(loginErrorSelector));

  const handleSubmit = useCallback(
    () => {
      form.validateFields(
        (err: { [key: string]: any }, values: { [key: string]: any }) => {
          if(!err)
          {
            const formData = new FormData();
            forEachObjIndexed((value, name) => formData.append(`${name}`, `${value}`), values);
            dispatch(makeLogin(formData));
          }
        },
      );
    },
    [dispatch]
  );

  return (
    <StyledLoginForm>
      <Form>
        {/* USERNAME */}
        <StyledRow>
          <StyledCol md={{ span: 12, offset: 6 }}>
            <StyledFormItem label="Username">
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please, input username',
                  },
                ],
              })(<Input placeholder="Username" />)}
            </StyledFormItem>
          </StyledCol>
        </StyledRow>
        {/* /USERNAME */}

        {/* PASSWORD */}
        <StyledRow>
          <StyledCol md={{ span: 12, offset: 6 }}>
            <StyledFormItem label="Password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input password',
                  },
                ],
              })(<Input placeholder="Password" />)}
            </StyledFormItem>
          </StyledCol>
        </StyledRow>
        {/* /PASSWORD */}

        <StyledFormItem wrapperCol={{ md: { span: 12, offset: 6 } }}>
          <StyledControlButtons>
            <Button type="primary" onClick={handleSubmit} loading={isLoading}>
              Sign In
            </Button>
            <DefaultLink to="/">
              <Button>
                Отмена
              </Button>
            </DefaultLink>
          </StyledControlButtons>
        </StyledFormItem>
      </Form>
    </StyledLoginForm>
  );
};

export default Form.create()(LoginForm);
