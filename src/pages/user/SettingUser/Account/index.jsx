import React from "react";
import { LayoutSetting } from "layouts/LayoutSetting";
import { Form, Switch, Button } from "antd";

import { Information } from "./Information";
import { ChangePassword } from "./ChangePassword";

const Account = () => {
  const [form] = Form.useForm();

  return (
    <LayoutSetting>
      <section className="px-4 py-6 space-y-3">
        <Information />
        <ChangePassword />

        <Form
          form={form}
          name="basic"
          scrollToFirstError
          layout="vertical"
          className="!p-4 border bg-white space-y-3 rounded-md"
        >
          <div className="flex items-center space-x-3">
            <Switch />
            <span className="text-sm text-gray-700">
              News and features updates, as well as occasional company
              announcements.
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Switch />
            <span className="text-sm text-gray-700">
              Emails regarding the service and your usage.
            </span>
          </div>
          <Form.Item className="!mb-0 p-3 text-right">
            <Button
              className="!rounded-md !bg-[#0EA5E9]"
              type="primary"
              size="large"
              htmlType="submit"
            >
              Save changes
            </Button>
          </Form.Item>
        </Form>
      </section>
    </LayoutSetting>
  );
};

export default Account;
