import React from "react";
import { Form, Input, Select, Button } from "antd";
import MasterLayout from "layouts/MasterLayout";
import { InformationItem } from "./InformationItem";

import { RiImageAddLine } from "react-icons/ri";

const NewProfile = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { TextArea } = Input;

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  return (
    <MasterLayout>
      <Form
        form={form}
        name="basic"
        // onFinish={(values) => dispatch(createProject(values))}
        scrollToFirstError
        layout="vertical"
      >
        <Form.List name={`data`}>
          {(fields) => (
            <div className="p-3 space-y-3">
              <InformationItem
                information="Personal information"
                content="This information will be displayed publicly so be careful what you share."
                childrenClassName="space-y-4"
              >
                <Form.Item
                  className="!mb-0"
                  //   rules={[{ required: true }]}
                  name="email"
                  label="Email"
                >
                  <Input className="!rounded" placeholder="" />
                </Form.Item>
                <Form.Item
                  className="!mb-0 !w-1/2"
                  name="email"
                  label="Date of Birth"
                >
                  <Input className="!rounded" placeholder="" />
                </Form.Item>
                <Form.Item
                  className="!mb-0 !w-1/2"
                  name="gender"
                  label="Gender"
                >
                  <Select className="!rounded" defaultValue="Male">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="otherGenders">Other genders</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  className="!mb-0 !w-1/2"
                  name="gender"
                  label="Country / Region"
                >
                  <Select className="!rounded" defaultValue="United States">
                    <Option value="male">United States</Option>
                    <Option value="female">Female</Option>
                    <Option value="otherGenders">Other genders</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="!mb-0"
                  //   rules={[{ required: true }]}
                  name="email"
                  label="Address"
                >
                  <Input className="!rounded" placeholder="" />
                </Form.Item>
              </InformationItem>

              <InformationItem
                information="Profile"
                content="This information will be displayed publicly so be careful what you share. "
                childrenClassName="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <span className="w-[48px] h-[48px] border rounded-full flex items-center justify-center">
                    ok
                  </span>
                  <Button className="!h-[48px] !rounded-md">Change</Button>
                </div>
                <div>
                  <label>Cover Photo</label>
                  <button
                    type="button"
                    className="relative w-full block border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0369A1]"
                  >
                    <p className="flex items-center justify-center">
                      {" "}
                      <RiImageAddLine className="text-gray-400 !w-[38px] !h-[40px]" />
                    </p>
                    <span className="mt-2 text-sm flex items-center space-x-1 justify-center font-medium text-gray-900 text-[14px]">
                      <a href>Upload a file</a>
                      <span>or drag and drop</span>
                    </span>
                    <span className="text-[12px] text-gray-400">
                      PNG, JPG, up to 10MB
                    </span>
                  </button>
                </div>
                <Form.Item
                  className="!mb-0 !w-1/2"
                  //   rules={[{ required: true }]}
                  name="email"
                  label="Goal"
                >
                  <Input className="!rounded" placeholder="" />
                </Form.Item>
                <Form.Item className="w-full !mb-0" name="plan" label="Plan">
                  <TextArea className="!rounded !h-[120px]" placeholder="" />
                </Form.Item>
                <Form.Item
                  className="w-full !mb-0"
                  name="plan"
                  label="Language"
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    defaultValue={["a10", "c12"]}
                  >
                    {children}
                  </Select>
                </Form.Item>
                <Form.Item
                  className="w-full !mb-0"
                  name="plan"
                  label="Programming language"
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    defaultValue={["a10", "c12"]}
                  >
                    {children}
                  </Select>
                </Form.Item>
                <Form.Item
                  className="w-full !mb-0"
                  name="plan"
                  label="Framework"
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Please select"
                    defaultValue={["a10", "c12"]}
                  >
                    {children}
                  </Select>
                </Form.Item>
                <Form.Item
                  className="w-full !mb-0"
                  name="cv"
                  label="CV Self Introduction"
                >
                  <TextArea className="!rounded !h-[120px]" placeholder="" />
                </Form.Item>
              </InformationItem>
            </div>
          )}
        </Form.List>
        <div className="p-3 text-right">
          <Form.Item>
            <Button
              className="!rounded-md bg-[#0EA5E9]"
              type="primary"
              size="large"
              htmlType="submit"
              //   loading={cProject.isLoading}
            >
              Save changes
            </Button>
          </Form.Item>
        </div>
      </Form>
    </MasterLayout>
  );
};

export default NewProfile;
