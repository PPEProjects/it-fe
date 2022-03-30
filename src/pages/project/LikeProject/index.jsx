import React, { useEffect } from 'react';
import { Form, Button } from 'antd';
import { userSelector } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { createProjectLike } from 'pages/project/projectSlice';
import { getURLParams } from 'services';

import { AiOutlineLike } from 'react-icons/ai';

export const LikeProject = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { me } = useSelector(userSelector);
  const { id } = getURLParams();

  // useEffect(() => {
  //   form.setFieldsValue({
  //     data: {
  //       userId: me?.data?.id,
  //       projectId: id,
  //     },
  //   });
  // }, [me, id, form]);
  return (
    <Button
      className="!rounded-full !w-10 !text-[#164E63] !border-none"
      onClick={() => {
        const values = { userId: me?.data?.id, projectId: id };
        dispatch(createProjectLike({ data: values }));
      }}
    >
      <AiOutlineLike className="text-2xl stroke-[20px]" />
    </Button>
  );
  return (
    <section>
      <Form
        form={form}
        onFinish={values => {
          console.log('values', values);
          dispatch(createProjectLike(values));
        }}
      >
        <Form.List name="data">
          {() => (
            <>
              <Form.Item name="userId" hidden={true} />
              <Form.Item name="projectId" hidden={true} />
            </>
          )}
        </Form.List>

        <Form.Item className="!mb-0">
          <Button className="!rounded-full !w-10 !text-[#164E63] !border-none" htmlType="submit">
            <AiOutlineLike className="text-2xl stroke-[20px]" />
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};
