import React from "react";
import { Form, Input, Select, Switch } from "antd";

import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";

const NewProject = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Option } = Select;

  return (
    <section>
      <div className="text-[#075985] border-b">
        <p className="text-[18px]">Project Information </p>
        <p className="flex rounded items-center pl-5 p-2 bg-[#E0F2FE] space-x-3 text-[20px]">
          <BsFillInfoCircleFill />
          <span>
            Congratulations for having a great project. Please{" "}
            <a href>see Pitch Deck sample here</a> for well-prepared.
          </span>
        </p>
      </div>
      <Form form={form} name="basic" scrollToFirstError>
        <div className="flex items-center border-b p-3">
          <label className="w-1/3 text-sm text-gray-700">
            Idea/Project name
          </label>
          <Form.Item
            className="w-2/3 !mb-0"
            rules={[{ required: true }]}
            name=""
          >
            <Input className="!rounded" placeholder="" />
          </Form.Item>
        </div>
        <div className="flex border-b p-3">
          <label className="w-1/3 text-sm text-gray-700">
            Main author name
          </label>
          <Form.Item
            className="w-1/3 !mb-0"
            rules={[{ required: true }]}
            name=""
          >
            <Input className="!rounded" placeholder="" />
          </Form.Item>
          <div className="w-1/3 !pl-4 space-y-3">
            <div className="flex items-center">
              <label className="text-sm w-[60px] text-gray-700">Email</label>
              <Form.Item
                className="!mb-0 w-full"
                rules={[{ required: true }]}
                name=""
              >
                <Input className="!rounded" placeholder="you@example.com" />
              </Form.Item>
            </div>
            <div className="flex items-center">
              <label className="text-sm w-[60px] text-gray-700">Phone</label>
              <Form.Item
                className="!mb-0 w-full"
                rules={[{ required: true }]}
                name=""
              >
                <Input className="!rounded" placeholder="" />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="flex border-b p-3">
          <label className="w-1/3 text-sm text-gray-700">Co-author name</label>
          <Form.Item
            className="w-1/3 !mb-0"
            rules={[{ required: true }]}
            name=""
          >
            <Input className="!rounded" placeholder="" />
          </Form.Item>
          <div className="w-1/3 !pl-4 space-y-3">
            <div className="flex items-center">
              <label className="text-sm w-[60px] text-gray-700">Email</label>
              <Form.Item
                className="!mb-0 w-full"
                rules={[{ required: true }]}
                name=""
              >
                <Input className="!rounded" placeholder="you@example.com" />
              </Form.Item>
            </div>
            <div className="flex items-center">
              <label className="text-sm w-[60px] text-gray-700">Phone</label>
              <Form.Item
                className="!mb-0 w-full"
                rules={[{ required: true }]}
                name=""
              >
                <Input className="!rounded" placeholder="" />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="flex border-b p-3">
          <label className="w-1/3 text-sm text-gray-700">
            Main description
          </label>
          <Form.Item
            className="w-2/3 !mb-0"
            rules={[{ required: true }]}
            name=""
          >
            <TextArea className="!rounded !h-[120px]" placeholder="" />
          </Form.Item>
        </div>
        <div className="flex items-center border-b p-3">
          <label className="w-1/3 text-sm text-gray-700">
            Category (website, adon, extension, app, other...)
          </label>
          <Form.Item
            className="w-1/3 !mb-0"
            rules={[{ required: true }]}
            name=""
          >
            <Input className="!rounded" placeholder="" />
          </Form.Item>
        </div>
        <div className="flex items-center border-b p-3">
          <label className="w-1/3 text-sm text-gray-700">Budget</label>
          <div className="w-1/3 space-x-3 flex">
            <Form.Item
              className="!mb-0 w-[70%]"
              rules={[{ required: true }]}
              name=""
            >
              <Input className="!rounded" placeholder="$ 0.00" />
            </Form.Item>
            <Form.Item
              className="!mb-0 w-[30%]"
              rules={[{ required: true }]}
              name=""
            >
              <Select className="!rounded" defaultValue="USD">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
        <div className="flex items-center border-b p-3">
          <label className="w-1/3 text-sm text-gray-700 flex items-center space-x-2">
            <span>Recruit members after done</span>
            <AiFillInfoCircle className="text-lg text-gray-400" />
          </label>
          <div className="w-1/3">
            <Switch defaultChecked />
          </div>
        </div>
        <div className="flex items-center border-b p-3">
          <label className="w-1/3 text-sm text-gray-700">
            Salary estimated at that time
          </label>
          <div className="w-1/3 space-x-3 flex">
            <Form.Item
              className="!mb-0 w-[70%]"
              rules={[{ required: true }]}
              name=""
            >
              <Input className="!rounded" placeholder="$ 0.00" />
            </Form.Item>
            <Form.Item
              className="!mb-0 w-[30%]"
              rules={[{ required: true }]}
              name=""
            >
              <Select className="!rounded" defaultValue="USD">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
        <div className="flex border-b p-3">
          <label className="w-1/3 text-sm text-gray-700">Main picture</label>
          <Form.Item
            className="w-2/3 !mb-0"
            rules={[{ required: true }]}
            name=""
          >
            <TextArea className="!rounded !h-[120px]" placeholder="" />
          </Form.Item>
        </div>
      </Form>
    </section>
  );
};

export default NewProject;
