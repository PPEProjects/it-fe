import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authsSelector, authVerifyEmail } from "./authsSlice";
import { error } from "components";

import { CheckCircleOutlined } from "@ant-design/icons";
import { AiFillLeftCircle } from "react-icons/ai";

const NewPassword = () => {
  const dispatch = useDispatch();
  const { vAuth } = useSelector(authsSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!vAuth?.data) return;
    if (vAuth?.data.status) {
      Modal.confirm({
        title: "Success",
        icon: <CheckCircleOutlined />,
        content: "Password changed successfully.",
        cancelButtonProps: { className: "hidden" },
        onOk() {
          navigate("/LoginPage");
        },
      });
      return;
    }
    error(vAuth?.data?.message);
  }, [vAuth]);

  return (
    <section className="flex">
      <div className="w-1/2 pb-4 flex flex-col justify-between h-[700px]">
        <div>
          <div className="pl-[80px] pt-7">
            <Link to="/LoginPage">
              <AiFillLeftCircle className="text-4xl text-gray-300" />
            </Link>
          </div>
          <div className="px-[160px] pt-7">
            <Form
              name="basic"
              onFinish={(values) => dispatch(authVerifyEmail(values))}
              layout="vertical"
            >
              <Form.Item>
                <div className="flex items-center justify-center space-x-3">
                  <img
                    className="w-[84px] h-[80px]"
                    src={`/assets/images/photo_2021-07-14_10-53-20.jpg`}
                    alt=""
                  />
                  <h3 className="text-[24px] text-black pt-3 font-bold text-center">
                    Choose a new password
                  </h3>
                </div>
              </Form.Item>
              <Form.Item
                name="token"
                label="Input the security code"
                rules={[
                  {
                    required: true,
                    message: "Please input the security code!",
                  },
                ]}
              >
                <Input.Password
                  className="!rounded"
                  placeholder="Security code"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                hasFeedback
                rules={[
                  {
                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                    message:
                      "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters!",
                  },
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  className="!rounded"
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  className="!rounded"
                  placeholder="Password"
                  size="large"
                />
              </Form.Item>

              <Form.Item className="text-center">
                <Button
                  className="!w-[170px] !rounded-md !bg-[#0EA5E9]"
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={vAuth.isLoading}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="text-center text-[18px] pb-3">
          <Link
            to="/LoginPage"
            className="relative z-10 text-center text-blue-500 font-medium underline"
          >
            Log in
          </Link>
        </div>
      </div>
      <div className="w-1/2 bg-gray-100">2</div>
    </section>
  );
};
export default NewPassword;
