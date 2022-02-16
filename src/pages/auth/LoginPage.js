import React, { useEffect } from "react";
import { Button, Divider, Form, Input } from "antd";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import {
//   authLogin,
//   authsSelector,
//   getUrlFacebook,
//   getUrlGoogle,
//   setAuth,
// } from "slices/auths";
// import Cookies from "universal-cookie";

// var cookies = new Cookies();
const LoginPage = () => {
  // const dispatch = useDispatch();
  // const { lAuth, iAuth, url } = useSelector(authsSelector);

  return (
    <section className="flex">
      <div className="w-1/2 px-[160px] pt-14 pb-4 flex flex-col justify-between h-[700px]">
        <Form
          name="basic"
          // onFinish={(values) => dispatch(authLogin(values))}
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
                Login
              </h3>
            </div>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                whitespace: true,
                message: "",
              },
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
            <Input className="!rounded" placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
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
          <div className="flex justify-center text-[14px] space-x-1 pb-4 text-gray-400">
            <span>Forgot Password?</span>
            <Link
              to="/ForgotPassword"
              className="relative z-10 text-center text-blue-500 font-medium underline"
            >
              Click here
            </Link>
          </div>
          <Form.Item className="text-center">
            <Button
              className="!w-[120px] !rounded-md !bg-[#0EA5E9]"
              type="primary"
              size="large"
              htmlType="submit"
              // loading={lAuth.isLoading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className="flex justify-center text-[18px] space-x-1 pb-3 text-gray-400">
          <span>Don't have an account?</span>
          <Link
            to="/RegisterPage"
            className="relative z-10 text-center text-blue-500 font-medium underline"
          >
            Register!
          </Link>
        </div>
      </div>
      <div className="w-1/2 bg-gray-100">2</div>
    </section>
  );
};
export default LoginPage;
