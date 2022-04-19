import { InformationMember } from 'admin/AdminIstrator/MemberAdmin/AllMember/InformationMember';
import { Form, Input, Button } from 'antd';
import React, { useEffect } from 'react';
import { thumbImage } from 'services/convert';
import { Stars } from 'components/Stars';
import { feedBackSelector, updateFeedBack } from 'pages/feedBack/feedBackSlice';
import { useDispatch, useSelector } from 'react-redux';

export const StatusManage = ({ dataDetailMemberProject, openModal, isCloseModal }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { upFeedBack } = useSelector(feedBackSelector);
  console.log('dataDetailMemberProject', dataDetailMemberProject);
  useEffect(() => {
    form.setFieldsValue({
      data: {
        content: dataDetailMemberProject?.userFeedback?.content,
        id: dataDetailMemberProject?.userFeedback?.id,
        userId: dataDetailMemberProject?.memberUser?.id,
      },
    });
  }, [dataDetailMemberProject, form]);
  return (
    <div>
      <h5 className="font-semibold text-sm text-gray-800">Review Members</h5>
      <p className="-mt-2 font-medium text-xs text-gray-500">Reviews are public and editable. </p>
      <div className="flex items-center space-x-4">
        <div className="w-1/3">
          <div>
            <InformationMember
              nameMember={dataDetailMemberProject?.memberUser?.name}
              imgSrcAvatar={thumbImage(
                dataDetailMemberProject?.memberUser?.avatar_attachment?.file
              )}
              goadMember={dataDetailMemberProject?.memberUser?.name}
              emailMember={dataDetailMemberProject?.memberUser?.email}
              phoneMember={dataDetailMemberProject?.memberUser?.phone_number}
            />
          </div>
        </div>
        <Form
          form={form}
          name="basic"
          onFinish={values => {
            dispatch(updateFeedBack(values));
            openModal();
            isCloseModal();
          }}
          scrollToFirstError
          layout="vertical"
          className="w-2/3"
        >
          <Form.List name={`data`}>
            {() => (
              <>
                <span className="font-medium text-xs text-gray-500">Rating required</span>
                <div className="flex items-center -space-x-2">
                  <Stars
                    userId={dataDetailMemberProject?.memberUser?.id}
                    id={dataDetailMemberProject?.userFeedback?.id}
                    containerClassName="!text-5xl"
                    numberStartActive={dataDetailMemberProject?.userFeedback?.grate}
                  />
                </div>
                <span className="font-medium text-xs text-gray-500">Feedback</span>
                <Form.Item className="!mb-0" name="content">
                  <TextArea className="!h-[195px] !rounded" />
                </Form.Item>
                <Form.Item name="id" hidden={true} />
                <Form.Item name="userId" hidden={true} />
              </>
            )}
          </Form.List>

          <div className="flex justify-end space-x-4 mt-5">
            <Form.Item>
              <Button
                className="font-medium text-xs !rounded-lg"
                type="primary"
                size="large"
                htmlType="submit"
                loading={upFeedBack.isLoading}
              >
                Confirm
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};
