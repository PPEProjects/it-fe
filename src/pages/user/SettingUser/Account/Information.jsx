import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { detailUser, userSelector, upsertUserAdvance } from 'pages/user/userSlice';
import { getURLParams } from 'services';
import { success } from 'components';
import { StarRed } from './StarRed';

export const Information = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = getURLParams();
  const { deUser, upsertProfile } = useSelector(userSelector);
  const deUsers = deUser?.detailUserIds;

  useEffect(() => {
    dispatch(detailUser(id));
  }, [id, dispatch]);

  useEffect(() => {
    form.setFieldsValue({
      data: {
        user: {
          phone_number: deUsers?.phone_number,
          name: deUsers?.name,
          first_name: deUsers?.first_name,
        },
      },
    });
  }, [deUsers, form]);
  return (
    <Form
      form={form}
      name="basic"
      onFinish={values => dispatch(upsertUserAdvance(values))}
      scrollToFirstError
      layout="vertical"
      className="!p-4 border bg-white space-y-3 rounded-md"
    >
      <Form.List name="data">
        {() => (
          <Form.List name="user">
            {() => (
              <>
                <div>
                  <StarRed name="Email" star />
                  <Form.Item className="!mb-0">
                    <Input disabled value={deUsers?.email} className="!rounded" placeholder="" />
                  </Form.Item>
                </div>

                <div>
                  <StarRed name="Phone" star />
                  <Form.Item
                    className="!mb-0"
                    name="phone_number"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone number!',
                      },

                      {
                        min: 10,
                        message: 'The input is not valid Phone number!',
                      },
                      // { max: 13, message: 'The input is not valid Phone number!' },
                    ]}
                  >
                    <Input maxLength={13} className="!rounded" placeholder="" />
                  </Form.Item>
                </div>
                <div className="flex space-x-3 w-full">
                  <div className="w-1/2 space-y-1">
                    <StarRed name="First Name" />
                    <Form.Item className="!mb-0 w-full" name="first_name">
                      <Input className="!rounded" placeholder="" />
                    </Form.Item>
                  </div>
                  <div className="w-1/2">
                    <StarRed name="Last Name" star />
                    <Form.Item
                      className="!mb-0 w-full"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your last name!',
                        },
                      ]}
                    >
                      <Input className="!rounded" placeholder="" />
                    </Form.Item>
                  </div>
                </div>
              </>
            )}
          </Form.List>
        )}
      </Form.List>

      <Form.Item className="!mb-0 p-3 text-right">
        <Button
          className="!rounded-md !bg-[#0EA5E9]"
          onClick={() => success('Update information successfully!')}
          type="primary"
          size="large"
          htmlType="submit"
          loading={upsertProfile.isLoading}
        >
          Save changes
        </Button>
      </Form.Item>
    </Form>
  );
};
