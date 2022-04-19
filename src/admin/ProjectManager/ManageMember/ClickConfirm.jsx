import { Button, Form, Input } from 'antd';
import { LabelItemProject } from 'pages/project/NewProject/LabelItemProject';
import { createProject, projectSelector } from 'pages/project/projectSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { upsertMemberProject, memberProjectSelector } from 'pages/memberProject/memberProjectSlice';

export const ClickConfirm = ({ item, closeModal }) => {
  const dispatch = useDispatch();
  const { cCreateProjectMembers } = useSelector(memberProjectSelector);
  const [form] = Form.useForm();
  const { TextArea } = Input;

  useEffect(() => {
    form.setFieldsValue({
      data: {
        projectId: item?.project?.id,
      },
    });
  }, [item]);

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
        // onFinish={values => console.log('values', values)}
        onFinish={values => dispatch(upsertMemberProject(values))}
        scrollToFirstError
        layout="vertical"
      >
        <Form.List name={`data`}>
          {() => (
            <>
              <Form.Item label="Project Id" name="projectId" hidden>
                <Input className="!rounded !w-1/2 !h-10" />
              </Form.Item>
              <Form.Item label="Position" name="position">
                <Input className="!rounded !w-1/2 !h-10" />
              </Form.Item>
              <Form.Item label="Job Description" name="jobDescription">
                <TextArea rows={4} className="!round-lg" />
              </Form.Item>
              <Form.Item label="Link test" name="linkTest">
                <Input className="!rounded !h-10" />
              </Form.Item>
              <Form.Item className="text-right">
                <Button
                  // loading={cCreateProjectMembers?.isLoading}
                  onClick={() => closeModal()}
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
