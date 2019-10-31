import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import omit from 'ramda/es/omit';
import { useErrorNotification } from "components/domain/hooks";
import { updateTask, createTask } from "redux/modules/tasks/actions";
import { taskSelector } from "redux/modules/tasks/selectors";
import { tokenSelector } from "redux/modules/session/selectors";
import forEachObjIndexed from 'ramda/es/forEachObjIndexed';
import { Form, Input, Button, Checkbox } from 'antd';
import { WrappedFormUtils } from "antd/lib/form/Form";
import DefaultLink from 'components/common/Link';
import { Task } from "components/domain/tasks/types";
import {
  OverflowWrapper,
  TaskFormLayout,
  StyledCol,
  StyledRow,
  StyledFormItem,
  StyledControlButtons
} from 'components/domain/tasks/Form/styled';

export type TaskFormProps = {
  form: WrappedFormUtils;
};

const { TextArea } = Input;

const TaskForm: React.FC<TaskFormProps> = ({ form }) => {
  const dispatch = useDispatch();
  const [validationError, setValidationError] = useState<string | null>(null);
  const task: Task = useSelector(taskSelector);
  const token: string | null = useSelector(tokenSelector);
  useErrorNotification(validationError);
  const { getFieldDecorator } = form;

  const handleSubmit = useCallback(
    () => {
      form.validateFields(
        (err: { [key: string]: any }, values: { [key: string]: any }) => {
          if(err)
          {
            setValidationError('Проверьте правильность введенных данных');
            return;
          }
          setValidationError(null);
          const formData = new FormData();
          if (task.id) {
            formData.append('token', `${token}`);
            forEachObjIndexed((value, name) => {
              formData.append(`${name}`, `${value}`)
            }, { ...omit(['username', 'email'], values), status: values.status ? 10 : 0 });
            dispatch(updateTask(formData));
          } else {
            forEachObjIndexed((value, name) => formData.append(`${name}`, `${value}`), values);
            dispatch(createTask(formData));
          }
        },
      );
    },
    [dispatch]
  );

  return (
    <OverflowWrapper>
      <TaskFormLayout>
        <h3>{ task.id ? 'Редактировать задачу' : 'Новая задача' }</h3>
        <Form>
          {/* NAME */}
          <StyledRow>
            <StyledCol md={{ span: 10, offset: 7 }}>
              <StyledFormItem label="Имя пользователя">
                {getFieldDecorator('username', {
                  initialValue: task.username,
                  rules: [
                    {
                      required: true,
                      message: 'Please, input your name',
                    },
                  ],
                })(<Input disabled={!!task.id} placeholder="Please, input your name" />)}
              </StyledFormItem>
            </StyledCol>
          </StyledRow>
          {/* /NAME */}

          {/* EMAIL */}
          <StyledRow>
            <StyledCol md={{ span: 10, offset: 7 }}>
              <StyledFormItem label="E-mail">
                {getFieldDecorator('email', {
                  initialValue: task.email,
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail',
                    },
                  ],
                })(<Input disabled={!!task.id} placeholder="Please, input your E-mail" />)}
              </StyledFormItem>
            </StyledCol>
          </StyledRow>
          {/* /EMAIL */}

          {/* TASK TEXT */}
          <StyledRow>
            <StyledCol md={{ span: 10, offset: 7 }}>
              <StyledFormItem label="Текст задачи">
                {getFieldDecorator('text', {
                  initialValue: task.text,
                  rules: [
                    {
                      required: true,
                      message: 'Please, input text of the task',
                    },
                  ],
                })(<TextArea rows={5} placeholder="Please, type a task text" />)}
              </StyledFormItem>
            </StyledCol>
          </StyledRow>
          {/* /TASK TEXT */}

          {/* DONE SWITCH */}
          {
            task.id && (
              <StyledRow>
                <StyledCol md={{ span: 10, offset: 7 }}>
                  <StyledFormItem>
                    {getFieldDecorator('status', {
                      initialValue: task.status === 10,
                      valuePropName: 'checked',
                      rules: [
                        {
                          required: true,
                          message: 'Please, input text of the task',
                        },
                      ],
                    })(<Checkbox>Выполнено</Checkbox>)}
                  </StyledFormItem>
                </StyledCol>
              </StyledRow>
            )
          }
          {/* /DONE SWITCH */}

          <StyledFormItem wrapperCol={{ md: { span: 10, offset: 7 } }}>
            <StyledControlButtons>
              <Button type="primary" onClick={handleSubmit}>
                { task.id ? 'Сохранить' : 'Создать' }
              </Button>
              <DefaultLink to="/">
                <Button>
                  Отмена
                </Button>
              </DefaultLink>
            </StyledControlButtons>
          </StyledFormItem>
        </Form>
      </TaskFormLayout>
    </OverflowWrapper>
  );
};

export default Form.create()(TaskForm);
