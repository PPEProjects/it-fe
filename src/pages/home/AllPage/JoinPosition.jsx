import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { userSelector } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { memberProjectSelector, upsertMemberProject } from 'pages/memberProject/memberProjectSlice';
import { getURLParams } from 'services';
import { StarRed } from 'components/StarRed';
import { Link } from 'react-router-dom';

export const JoinPosition = ({ dataPosition, dataLinkTest }) => {
  // console.log('dataPosition', dataPosition);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { me } = useSelector(userSelector);
  const { upMemberProject } = useSelector(memberProjectSelector);
  const { id } = getURLParams();

  useEffect(() => {
    form.setFieldsValue({
      data: {
        memberUserId: me?.data?.id,
        status: 'pending',
        projectId: id,
        position: dataPosition,
        linkTest: dataLinkTest,
      },
    });
  }, [me, id, form, dataPosition]);

  const handlerSubmit = () => {
    // <a className="text-white" href={dataLinkTest} target="_blank"></a>;
    window.open(dataLinkTest, '_blank', 'noopener,noreferrer');
  };

  // console.log('dataLinkTest', dataLinkTest);
  return (
    <section>
      <span className="text-[18px] font-semibold text-gray-800">Confirm Information</span>
      <Form
        form={form}
        name="basic"
        onFinish={values => {
          dispatch(upsertMemberProject(values));
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
                  value={me?.data?.email}
                  disabled
                  className="!rounded"
                  placeholder="lalamanghen@gmail.com"
                />
              </Form.Item>
              <div className="flex items-center space-x-3 w-full">
                <Form.Item className="!mb-0 w-1/2" label="First name">
                  <Input
                    value={me?.data?.first_name}
                    disabled
                    className="!rounded"
                    placeholder="Enter your first name"
                  />
                </Form.Item>
                <Form.Item className="!mb-0 w-1/2" label="Last name">
                  <Input
                    value={me?.data?.name}
                    disabled
                    className="!rounded"
                    placeholder="Christian"
                  />
                </Form.Item>
              </div>
              <Form.Item className="!mb-0" label="Phone">
                <Input
                  value={me?.data?.phone_number}
                  disabled
                  className="!rounded"
                  placeholder="0987 654 321"
                />
              </Form.Item>
              <div>
                <StarRed star name="Position" />
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'Please input your position!',
                    },
                  ]}
                  className="!mb-0 w-1/2"
                  name="position"
                >
                  <Input className="!rounded" disabled />
                </Form.Item>
              </div>
              <Form.Item className="!mb-0" label="Job Description" name="jobDescription">
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
            type="primary"
            size="large"
            htmlType="submit"
            loading={upMemberProject.isLoading}
            onClick={() => handlerSubmit()}
          >
            Start test
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};
