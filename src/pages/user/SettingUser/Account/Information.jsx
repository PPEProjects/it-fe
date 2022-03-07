import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { detailUser, userSelector, upsertUserAdvance } from 'pages/user/userSlice';
import { getURLParams } from 'services';
import { success } from 'components';

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
                <Form.Item className="!mb-0" label="Email">
                  <Input disabled value={deUsers?.email} className="!rounded" placeholder="" />
                </Form.Item>
                <Form.Item className="!mb-0" name="phone_number" label="Phone">
                  <Input className="!rounded" placeholder="" />
                </Form.Item>
                <div className="flex items-center space-x-3 w-full">
                  <Form.Item className="!mb-0 w-1/2" name="first_name" label="First name">
                    <Input className="!rounded" placeholder="" />
                  </Form.Item>
                  <Form.Item className="!mb-0 w-1/2" name="name" label="Last name">
                    <Input className="!rounded" placeholder="" />
                  </Form.Item>
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
