import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { LabelItemProject } from './LabelItemProject';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, projectSelector, setProjectMerge } from './../projectSlice';
import { userSelector } from 'pages/user/userSlice';

export const TestNewProject = () => {
  const dispatch = useDispatch();
  const { cProject } = useSelector(projectSelector);
  const { me } = useSelector(userSelector);
  const { TextArea } = Input;
  const [form] = Form.useForm();

  return (
    <div>
      <label className="font-medium text-2xl p-4">Form Cua Trong</label>
      <Form
        form={form}
        name="basic"
        onFinish={values => dispatch(createProject(values))}
        scrollToFirstError
      >
        <Form.List name={`data`}>
          {() => (
            <>
              <LabelItemProject label="Type">
                <Form.Item name="type" initialValue="project">
                  <Radio.Group>
                    <Radio value="project">Project</Radio>
                    <br />
                    <Radio value="ideas">Ideas</Radio>
                  </Radio.Group>
                </Form.Item>
              </LabelItemProject>

              <LabelItemProject label="Idea/Project name">
                <Form.Item name="name">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </LabelItemProject>

              <LabelItemProject flex label="Main author name">
                <Form.Item className="w-1/2 !mb-0" rules={[{ required: true }]}>
                  <Input value={me?.data?.name} disabled className="!rounded" placeholder="" />
                </Form.Item>
                <div className="w-1/2 !pl-4 space-y-3">
                  <div className="flex items-center">
                    <label className="text-sm w-[60px] text-gray-700">Email</label>
                    <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                      <Input value={me?.data?.email} className="!rounded" disabled />
                    </Form.Item>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm w-[60px] text-gray-700">Phone</label>
                    <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                      <Input value={me?.data?.phone_number} className="!rounded" disabled />
                    </Form.Item>
                  </div>
                </div>
              </LabelItemProject>

              <LabelItemProject label="Main description">
                <Form.Item name="description">
                  <TextArea className="!h-[120px]" />
                </Form.Item>
              </LabelItemProject>

              <LabelItemProject label="Category (website, adon, extension, app, other...)">
                <Form.Item className="!w-1/2" name="category">
                  <Input placeholder="Basic usage" />
                </Form.Item>
              </LabelItemProject>
            </>
          )}
        </Form.List>

        <div className="flex space-x-2 justify-end p-3">
          <Form.Item>
            <Button
              className="!rounded-md"
              size="large"
              onClick={() => {
                dispatch(setProjectMerge('cProject', { isOpen: false }));
              }}
              // onClick={() => dispatch(setProjectMerge('cProject', { isOpen: false }))}
            >
              Cancel
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              className="!rounded-md"
              type="primary"
              size="large"
              htmlType="submit"
              loading={cProject.isLoading}
            >
              Create
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
