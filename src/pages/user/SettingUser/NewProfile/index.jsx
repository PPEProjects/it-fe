import React, { useEffect } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { LayoutSetting } from 'layouts/LayoutSetting';
import { InformationItem } from './InformationItem';
import { detailUser, userSelector, upsertUserAdvance } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getURLParams } from 'services';
import { success } from 'components';
import { Image } from '@tienlucky/storage';
import { ImageSingleUpload, ImageView } from '@smileeye.edu.vn/image';
import '@smileeye.edu.vn/image/src/smileeye.edu.vn-image.min.css';
import './style.css';
import { RiImageAddLine } from 'react-icons/ri';

const NewProfile = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { Option } = Select;
  const { TextArea } = Input;
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
          date_of_birth: deUsers?.date_of_birth,
          gender: deUsers?.gender,
          address: deUsers?.address,
          // avatar_attachment: deUsers?.avatar_attachment?.file,
        },
        skill: {
          framework: deUsers?.userAdvance?.skill?.framework,
          program_language: deUsers?.userAdvance?.skill?.program_language,
        },
        goal: deUsers?.userAdvance?.goal,
        plan: deUsers?.userAdvance?.plan,
        info: deUsers?.userAdvance?.info,
        language: deUsers?.userAdvance?.language,
      },
    });
  }, [deUsers, form]);

  return (
    <LayoutSetting>
      <Form
        form={form}
        name="basic"
        onFinish={values => dispatch(upsertUserAdvance(values))}
        scrollToFirstError
        layout="vertical"
        className="!px-4 !py-6"
      >
        <section className="border rounded-md p-4 bg-white">
          <Form.List name="data">
            {() => (
              <div className="space-y-3">
                <Form.List name="user">
                  {() => (
                    <InformationItem
                      information="Personal information"
                      content="This information will be displayed publicly so be careful what you share."
                      childrenClassName="space-y-4"
                    >
                      <Form.Item className="!mb-0" label="Email">
                        <Input
                          disabled
                          value={deUsers?.email}
                          className="!rounded"
                          placeholder=""
                        />
                      </Form.Item>
                      <Form.Item
                        className="!mb-0 !w-1/2"
                        name="date_of_birth"
                        label="Date of Birth"
                      >
                        <Input className="!rounded" placeholder="" />
                      </Form.Item>
                      <Form.Item className="!mb-0 !w-1/2" name="gender" label="Gender">
                        <Select className="!rounded">
                          <Option value="male">Male</Option>
                          <Option value="female">Female</Option>
                          <Option value="otherGenders">Other genders</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item className="!mb-0 !w-1/2" name="gender" label="Country / Region">
                        <Select className="!rounded" defaultValue="United States">
                          <Option value="male">United States</Option>
                          <Option value="female">Female</Option>
                          <Option value="otherGenders">Other genders</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item className="!mb-0" name="address" label="Address">
                        <Input className="!rounded" placeholder="" />
                      </Form.Item>
                    </InformationItem>
                  )}
                </Form.List>

                <InformationItem
                  information="Profile"
                  content="This information will be displayed publicly so be careful what you share. "
                  childrenClassName="space-y-4"
                >
                  <Form.List name="user">
                    {() => (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <img
                            alt=""
                            src={deUsers?.avatar_attachment?.file}
                            className="w-[48px] h-[48px] border rounded-full flex items-center justify-center"
                          />
                          <div className="image-customize relative">
                            {/* <Button className="!h-[48px] !rounded-md">Change</Button> */}
                            <p className="customize absolute -mt-7">
                              <Form.Item name="avatar_attachment">
                                <ImageSingleUpload
                                  labelDrag={false}
                                  labelFormat={false}
                                  labelMain="Change"
                                  width={60}
                                  isBorder
                                  icon={false}
                                  isDelete
                                />
                              </Form.Item>
                            </p>
                          </div>
                        </div>
                        <Form.Item
                          name="background_attachment"
                          label="Cover Photo"
                          className="text-sm text-gray-700"
                        >
                          <ImageSingleUpload width={200} isBorder isDelete isFull />
                        </Form.Item>
                      </div>
                    )}
                  </Form.List>

                  <Form.Item className="!mb-0 !w-1/2" name="goal" label="Goal">
                    <Input className="!rounded" placeholder="" />
                  </Form.Item>
                  <Form.Item className="w-full !mb-0" name="plan" label="Plan">
                    <TextArea className="!rounded !h-[120px]" placeholder="" />
                  </Form.Item>
                  <Form.Item className="w-full !mb-0" name="language" label="Language">
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="Please select"
                    >
                      <Option value="male">Male</Option>
                    </Select>
                  </Form.Item>
                  <Form.List name="skill">
                    {() => (
                      <>
                        <Form.Item
                          className="w-full !mb-0"
                          name="program_language"
                          label="Programming language"
                        >
                          <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Please select"
                          >
                            <Option value="female">Female</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item className="w-full !mb-0" name="framework" label="Framework">
                          <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Please select"
                          >
                            <Option value="otherGenders">Other genders</Option>
                          </Select>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>

                  <Form.Item className="w-full !mb-0" name="info" label="CV Self Introduction">
                    <TextArea className="!rounded !h-[120px]" placeholder="" />
                  </Form.Item>
                </InformationItem>
              </div>
            )}
          </Form.List>
          <div className="p-3 text-right">
            <Form.Item>
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
          </div>
        </section>
      </Form>
    </LayoutSetting>
  );
};

export default NewProfile;
