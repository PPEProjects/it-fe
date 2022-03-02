import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authsSelector,
  authForgotPassword,
  authCheckExists,
} from "./authsSlice";
import debounce from "lodash/debounce";

import { CheckCircleOutlined } from "@ant-design/icons";
import { AiFillLeftCircle } from "react-icons/ai";

const ForgotPassWord = () => {
  const dispatch = useDispatch();
  const { fAuth, checkExistsAuth } = useSelector(authsSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const debounceFetch = debounce((email) => {
    dispatch(authCheckExists({ email }));
  }, 500);

  const existsAuth = () => {
    form.setFields([{ name: "email", errors: [] }]);
    if (checkExistsAuth?.email === false) {
      form.setFields([
        { name: "email", errors: ["This email does not exists."] },
      ]);
    }
  };

  useEffect(() => {
    existsAuth();
  }, [checkExistsAuth]);

  useEffect(() => {
    setIsModalVisible(fAuth?.data?.status);
  }, [fAuth]);

  useEffect(() => {
    if (isModalVisible)
      Modal.confirm({
        icon: <CheckCircleOutlined />,
        content:
          "We have sent a security code to reset password of SmileEye to your email.",
        onOk() {
          window.location.assign("/NewPassword");
        },
        cancelButtonProps: { className: "hidden" },
      });
  }, [isModalVisible]);

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
              onFinishFailed={(values) => {
                existsAuth();
              }}
              onFinish={(values) => {
                existsAuth();
                dispatch(authForgotPassword(values));
              }}
            >
              <Form.Item>
                <div className="flex items-center justify-center space-x-3">
                  <img
                    className="w-[84px] h-[80px]"
                    src={`/assets/images/photo_2021-07-14_10-53-20.jpg`}
                    alt=""
                  />
                  <h3 className="text-[24px] text-black pt-3 font-bold text-center">
                    Forgot your password?
                  </h3>
                </div>
                <div className="text-sm text-center px-4 pt-3 text-gray-700">
                  Don't worry! Fill in your email, if we can match it we'll send
                  you a link to reset your password.
                </div>
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  className="!rounded"
                  placeholder="Email"
                  size="large"
                  onChange={(e) => debounceFetch(e.target.value)}
                />
              </Form.Item>

              <Form.Item className="text-center">
                <Button
                  className="!w-[170px] !rounded-md !bg-[#0EA5E9]"
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={fAuth.isLoading}
                >
                  Reset password
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
export default ForgotPassWord;
