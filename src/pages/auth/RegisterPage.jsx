import React, { useEffect, useState } from 'react';
import { Button, Switch, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { authCheckExists, authRegister, authsSelector } from './authsSlice';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import { StarRed } from 'components/StarRed';

import { AiFillLeftCircle } from 'react-icons/ai';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { rAuth, checkExistsAuth } = useSelector(authsSelector);
  const [form] = Form.useForm();

  useEffect(() => {
    if (checkExistsAuth?.email === true) {
      form.setFields([{ name: 'email', errors: ['Email already exists.'] }]);
    }
    const val = form.getFieldError('email');
    setEmailValid(val);
  }, [checkExistsAuth]);

  const debounceFetch = debounce(email => {
    dispatch(authCheckExists({ email }));
  }, 500);

  const [emailValid, setEmailValid] = useState();
  const [email, setEmail] = useState();
  return (
    <section className="flex">
      <div className="w-1/2 pb-4 flex flex-col justify-between">
        <div className="pl-[80px] pt-7">
          <Link to="/LoginPage">
            <AiFillLeftCircle className="text-4xl text-gray-300" />
          </Link>
        </div>
        <div className="px-[160px] pt-7">
          <Form
            autoComplete="chrome-off"
            form={form}
            name="basic"
            onFinish={values => {
              dispatch(authRegister(values));
            }}
            onFieldsChange={(f, allFields) => {
              if (f[0].name[0] === 'email') {
                setEmail(f[0].value);
                debounceFetch(f[0].value);
                const val = form.getFieldError('email');
                setEmailValid(val);
              }
            }}
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
                  Create an account
                </h3>
              </div>
            </Form.Item>
            <div>
              <StarRed star name="Name" />
              <Form.Item
                name="name"
                rules={[
                  {
                    type: 'string',
                  },
                  {
                    whitespace: true,
                    message: 'Please input your name!',
                  },
                  // {
                  //   pattern: new RegExp(/^[a-zA-Z]*$/),
                  //   message: 'Name without special characters and number!',
                  // },
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                  {
                    max: 40,
                    message: 'Name has max 40 characters!',
                  },
                ]}
              >
                <Input className="!rounded" placeholder="Name" size="large" type="text" />
              </Form.Item>
            </div>
            <div className="relative">
              <div>
                <StarRed star name="Email" />
                <Form.Item
                  name="email"
                  rules={[
                    {
                      whitespace: true,
                      message: '',
                    },
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                    () => ({
                      validator(_, value) {
                        if (value.slice(0, -10).length > 30) {
                          // return Promise.reject('Name Email has max 30 characters!');
                          return Promise.reject(
                            'Your email must be between 6 and 30 characters in length.'
                          );
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  <Input className="!rounded" placeholder="Email" size="large" />
                </Form.Item>
              </div>
              {/* {_.isEmpty(emailValid) && email && (
                <Button
                  className={"absolute z-10 right-0 bottom-0 mb-2 mr-2"}
                  size={"small"}
                  type={"primary"}
                  icon={<MdDone />}
                />
              )} */}
            </div>
            <div>
              <StarRed star name="Phone" />
              <Form.Item
                name="phone_number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                  { min: 10, message: 'The input is not valid Phone number!' },
                  {
                    max: 13,
                    message: 'The input is not valid Phone number!',
                  },
                  {
                    pattern: new RegExp(/^[0-9]*$/),
                    message: 'Name without special characters and text!',
                  },
                ]}
              >
                <Input
                  className="!rounded"
                  placeholder="Phone"
                  type="tel"
                  maxLength={13}
                  size="large"
                />
              </Form.Item>
            </div>
            <div>
              <StarRed star name="Password" />
              <Form.Item
                name="password"
                rules={[
                  {
                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%^&*()_=+]).{8,}/,
                    // pattern: new RegExp(/^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i),
                    message:
                      'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters!',
                  },
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    max: 30,
                    message: 'Password has max 30 characters!',
                  },
                ]}
              >
                <Input.Password className="!rounded" placeholder="Password" size="large" />
              </Form.Item>
            </div>
            <div>
              <StarRed star name="Confirm Password" />
              <Form.Item
                name="password_confirmation"
                rules={[
                  {
                    pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                    message:
                      'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters!',
                  },
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error('The two passwords that you entered do not match!')
                      );
                    },
                  }),
                ]}
              >
                <Input.Password className="!rounded" placeholder="Password" size="large" />
              </Form.Item>
            </div>
            <div className="flex justify-center text-gray-700 text-[14px] space-x-2 pb-4">
              <Switch />
              <span>News and features updates, as well as occasional company announcements.</span>
            </div>
            <Form.Item className="text-center">
              <Button
                className="!w-[120px] !rounded-md !bg-[#0EA5E9]"
                type="primary"
                size="large"
                htmlType="submit"
                loading={rAuth.isLoading}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="flex justify-center text-[18px] space-x-1 pb-3">
          <span>Already have an account?</span>
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
export default RegisterPage;
