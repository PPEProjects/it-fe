import { Button, Form, Input } from 'antd';
import { LabelItemProject } from 'pages/project/NewProject/LabelItemProject';
import { createProject, projectSelector } from 'pages/project/projectSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ClickConfirm = () => {
  const dispatch = useDispatch();
  // const { cProject } = useSelector(projectSelector);
  const [form] = Form.useForm();
  const { TextArea } = Input;

  // useEffect(() => {
  //   dispatch(createProject());
  // }, [dispatch]);

  return (
    <section>
      <div>
        <p className="text-[18px] font-semibold">Add Position </p>
      </div>
      <Form
        form={form}
        name="basic"
        // onFinish={values => dispatch(createProject(values))}
        onFinish={values => console.log('values', values)}
        scrollToFirstError
        layout="vertical"
      >
        <Form.List name={`data`}>
          {() => (
            <>
              <Form.Item label="Position" name="position">
                <Input className="!rounded !w-1/2 !h-10" />
              </Form.Item>
              <Form.Item label="Job Description" name="description">
                <TextArea rows={4} maxLength={6} className="!round-lg" />
              </Form.Item>
              <Form.Item label="Link test" name="link">
                <Input className="!rounded !h-10" />
              </Form.Item>
              <Form.Item className="text-right">
                <Button
                  // loading={cProject.isLoading}
                  type="primary"
                  className="!h-10 !rounded-lg"
                  htmlType="submit"
                >
                  Add
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </section>
  );
};
