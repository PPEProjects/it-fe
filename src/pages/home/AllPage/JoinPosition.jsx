import React from 'react';
import { Form, Input, Button } from 'antd';

export const JoinPosition = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  return (
    <section>
      <span className="text-[18px] font-semibold text-gray-800">Confirm Information</span>
      <Form
        form={form}
        name="basic"
        // onFinish={(values) => dispatch(upsertUserAdvance(values))}
        scrollToFirstError
        layout="vertical"
        className="!py-4 bg-white space-y-3"
      >
        <Form.List name="data">
          {() => (
            <Form.List name="user">
              {() => (
                <>
                  <Form.Item className="!mb-0" label="Email">
                    <Input
                      // value={deUsers?.email}
                      className="!rounded"
                      placeholder="lalamanghen@gmail.com"
                    />
                  </Form.Item>
                  <div className="flex items-center space-x-3 w-full">
                    <Form.Item className="!mb-0 w-1/2" name="first_name" label="First name">
                      <Input className="!rounded" placeholder="Enter your first name" />
                    </Form.Item>
                    <Form.Item className="!mb-0 w-1/2" name="name" label="Last name">
                      <Input className="!rounded" placeholder="Christian" />
                    </Form.Item>
                  </div>
                  <Form.Item className="!mb-0" name="phone_number" label="Phone">
                    <Input className="!rounded" placeholder="0987 654 321" />
                  </Form.Item>
                  <Form.Item className="!mb-0 w-1/2" name="position" label="Position">
                    <Input className="!rounded" placeholder="Leader" />
                  </Form.Item>
                  <Form.Item className="!mb-0" label="Job Description" name="description">
                    <TextArea className="!rounded !h-[120px]" placeholder="" />
                  </Form.Item>
                </>
              )}
            </Form.List>
          )}
        </Form.List>

        <Form.Item className="!mb-0 p-3">
          <Button
            className="!rounded-md !bg-blue-500"
            // onClick={() => openNotificationWithIcon("success")}
            type="primary"
            size="large"
            htmlType="submit"
            // loading={upsertProfile.isLoading}
          >
            Start test
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};
