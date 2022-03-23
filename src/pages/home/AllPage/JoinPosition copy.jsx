import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { userSelector } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { memberProjectSelector, createMemberProject } from 'pages/memberProject/memberProjectSlice';
import { getURLParams } from 'services';

export const JoinPosition = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { me } = useSelector(userSelector);
  const { cMemberProject } = useSelector(memberProjectSelector);
  const { id } = getURLParams();

  useEffect(() => {
    form.setFieldsValue({
      data: {
        memberUserId: me?.data?.id,
        status: 'pending',
        projectId: id,
      },
    });
  }, [me, form, id]);

  return (
    <section>
      <span className="text-[18px] font-semibold text-gray-800">Confirm Information</span>
      <Form
        form={form}
        name="basic"
        onFinish={values => {
          dispatch(createMemberProject(values));
        }}
        scrollToFirstError
        layout="vertical"
        className="!py-4 bg-white space-y-3"
      >
        <Form.List name="data">
          {() => (
            <>
              <Form.Item className="!mb-0" label="Email">
                <Input
                  disabled
                  value={me?.data?.email}
                  className="!rounded"
                  placeholder="lalamanghen@gmail.com"
                />
              </Form.Item>
              <div className="flex items-center space-x-3 w-full">
                <Form.Item className="!mb-0 w-1/2" label="First name">
                  <Input
                    disabled
                    value={me?.data?.first_name}
                    className="!rounded"
                    placeholder="Enter your first name"
                  />
                </Form.Item>
                <Form.Item className="!mb-0 w-1/2" label="Last name">
                  <Input
                    disabled
                    value={me?.data?.name}
                    className="!rounded"
                    placeholder="Christian"
                  />
                </Form.Item>
              </div>
              <Form.Item className="!mb-0" label="Phone">
                <Input
                  disabled
                  className="!rounded"
                  value={me?.data?.phone_number}
                  placeholder="0987 654 321"
                />
              </Form.Item>
              <Form.Item className="!mb-0 w-1/2" name="position" label="Position">
                <Input className="!rounded" placeholder="Leader" />
              </Form.Item>
              <Form.Item className="!mb-0" label="Job Description">
                <TextArea className="!rounded !h-[120px]" placeholder="" />
              </Form.Item>
              <Form.Item name="memberUserId" hidden={true} />
              <Form.Item name="status" hidden={true} />
              <Form.Item name="projectId" hidden={true} />
            </>
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