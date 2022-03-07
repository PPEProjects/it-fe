import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { authsSelector, authChangePassword } from 'pages/auth/authsSlice';
import { error, success } from 'components';

export const ChangePassword = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { chAuth } = useSelector(authsSelector);

  useEffect(() => {
    if (!chAuth?.data) return;
    if (chAuth?.data) {
      success('Update information successfully!');
      return;
    }
    error(chAuth?.data?.message);
  }, [chAuth]);

  return (
    <Form
      form={form}
      name="basic"
      onFinish={values => dispatch(authChangePassword(values))}
      scrollToFirstError
      layout="vertical"
      className="!p-4 border bg-white space-y-3 rounded-md"
    >
      <Form.Item
        label="Current password"
        name="old_password"
        className="!mb-0"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password className="!rounded" placeholder="Password" size="large" />
      </Form.Item>
      <Form.Item
        name="new_password"
        label="New password"
        className="!mb-0"
        hasFeedback
        rules={[
          {
            pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
            message:
              'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters!',
          },
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password className="!rounded" placeholder="Enter your new password" size="large" />
      </Form.Item>
      <Form.Item
        name="confirm_password"
        label="Confirm password"
        dependencies={['new_password']}
        className="!mb-0"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('new_password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password className="!rounded" placeholder="Confirm your new password" size="large" />
      </Form.Item>
      <div>
        <Form.Item className="!mb-0 p-3 text-right">
          <Button
            className="!rounded-md !bg-[#0EA5E9]"
            type="primary"
            size="large"
            htmlType="submit"
            loading={chAuth.isLoading}
          >
            Change password
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
