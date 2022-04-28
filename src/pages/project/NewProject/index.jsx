import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Switch, Button, Radio } from 'antd';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { createProject, projectSelector, setProjectMerge } from 'pages/project/projectSlice';
import { getMe, userSelector } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyItem } from 'components/CurrencyItem';
import { LabelItemProject } from './LabelItemProject';
import { DatePicker } from 'antd';
import moment from 'moment';
import { ImageSingleUpload } from '@smileeye.edu.vn/image';
import '@smileeye.edu.vn/image/src/smileeye.edu.vn-image.min.css';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { ButtonItems } from './ButtonItems';
import { FcAddDatabase } from 'react-icons/fc';
import { ReactComponent as IconDatabasePlus } from 'assets/databasePlus-icon.svg';
import { ReactComponent as ImageIcon } from 'assets/image-icon.svg';

const settings = [
  {
    name: 'Public',
    description: 'This project will be visible to public.',
  },
  {
    name: 'Protected ',
    description: 'Only project members can see.',
  },
];

const NewProject = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { TextArea } = Input;
  const dispatch = useDispatch();
  const { cProject } = useSelector(projectSelector);
  const { me } = useSelector(userSelector);
  const [selected, setSelected] = useState(settings[0]);
  // const [status, setStatus] = useState('');

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    form.setFieldsValue({
      data: {
        status: 'created',
      },
    });
  });

  // const IconDatabasePlus = () => {
  //   return (
  //     <div className="!h-11 !w-11 mx-auto">
  //       {/* <img src="https://cdn-icons.flaticon.com/png/512/2018/premium/2018978.png?token=exp=1651121507~hmac=8250ecf8eb16fa06a03944692ede3ca5" /> */}
  //       <svg
  //         width="41"
  //         height="42"
  //         viewBox="0 0 41 42"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M1.5 9V29C1.5 33.418 8.663 37 17.5 37C18.881 37 20.221 36.913 21.5 36.748M1.5 9C1.5 13.418 8.663 17 17.5 17C26.337 17 33.5 13.418 33.5 9M1.5 9C1.5 4.582 8.663 1 17.5 1C26.337 1 33.5 4.582 33.5 9M33.5 9V23M33.5 19C33.5 23.418 26.337 27 17.5 27C8.663 27 1.5 23.418 1.5 19M33.5 29V35M33.5 35V41M33.5 35H39.5M33.5 35H27.5"
  //           stroke="#9CA3AF"
  //           stroke-width="2"
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //         />
  //       </svg>
  //     </div>
  //   );
  // };

  return (
    <section>
      <div className="text-[#075985] border-b">
        <p className="text-[18px]">Project Information </p>
        <p className="flex rounded items-center pl-5 p-2 bg-[#E0F2FE] space-x-3 text-[20px]">
          <BsFillInfoCircleFill />
          <span>
            Congratulations for having a great project. Please{' '}
            <a href>see Pitch Deck sample here</a> for well-prepared.
          </span>
        </p>
      </div>
      <Form
        form={form}
        name="basic"
        onFinish={values => dispatch(createProject(values))}
        scrollToFirstError
      >
        <Form.List name={`data`}>
          {() => (
            <>
              <LabelItemProject label="Type">
                <Form.Item className="!mb-0" name="type" initialValue="project">
                  <Radio.Group className="space-y-1.5">
                    <Radio value="project">Project</Radio>
                    <br />
                    <Radio value="ideas">Ideas</Radio>
                  </Radio.Group>
                </Form.Item>
              </LabelItemProject>
              <LabelItemProject label="Idea/Project name" rules>
                <Form.Item
                  className="!mb-0"
                  rules={[
                    {
                      type: 'string',
                    },
                    {
                      required: true,
                      message: 'Idea/Project Name is missing.',
                    },
                    {
                      max: 400,
                      message: 'Idea/Project Name has max 400 characters',
                    },
                    {
                      pattern: /^[^!@#$%^&*()+-,<.>/?}|{:;'\[\]'\\]*$/,
                      message: 'Idea/Project Name without special characters',
                    },
                  ]}
                  name="name"
                >
                  <Input className="!rounded" placeholder="" />
                </Form.Item>
              </LabelItemProject>

              <LabelItemProject label="Status" rules>
                <Form.Item className="!mb-0" name="status">
                  <Input className="!rounded" placeholder="" disabled />
                </Form.Item>
              </LabelItemProject>

              <LabelItemProject flex label="Main author name" rules>
                <Form.Item className="w-1/2 !mb-0" rules={[{ required: true }]}>
                  <Input value={me?.data?.name} disabled className="!rounded" placeholder="" />
                </Form.Item>
                <div className="w-1/2 !pl-4 space-y-3">
                  <div className="flex items-center">
                    <label className="text-sm w-[60px] text-gray-700 font-medium flex items-center space-x-1">
                      <span>Email</span>
                      <span className="text-[#EF4444] mt-1.5 text-base">*</span>
                    </label>
                    <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                      <Input className="!rounded" value={me?.data?.email} disabled />
                    </Form.Item>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm w-[60px] text-gray-700 font-medium flex items-center space-x-0.5">
                      <span>Phone</span>
                      <span className="text-[#EF4444] mt-1.5 pr-0.5 text-base">*</span>
                    </label>
                    <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                      <Input className="!rounded" value={me?.data?.phone_number} disabled />
                    </Form.Item>
                  </div>
                </div>
              </LabelItemProject>
              <div className="border-b pb-3">
                <LabelItemProject borderB={false} flex label="Co-author name">
                  <Form.Item
                    className="w-1/2 !mb-0"
                    rules={[
                      {
                        required: true,
                      },
                      {
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input value={me?.data?.name} className="!rounded" placeholder="" />
                  </Form.Item>

                  <div className="w-1/2 !pl-4 space-y-3">
                    <div className="flex items-center">
                      <label className="text-sm w-[60px] text-gray-700 font-medium">Email</label>
                      <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                        <Input className="!rounded" value={me?.data?.email} />
                      </Form.Item>
                    </div>

                    <div className="flex items-center">
                      <label className="text-sm w-[60px] text-gray-700 font-medium">Phone</label>
                      <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                        <Input className="!rounded" value={me?.data?.phone_number} />
                      </Form.Item>
                    </div>
                  </div>
                </LabelItemProject>
                <div>
                  <ButtonItems />
                </div>
              </div>

              <LabelItemProject label="Main description" rules information>
                <Form.Item
                  className="!mb-0"
                  rules={[
                    { required: true, message: 'Main Description is missing.' },
                    { max: 500, message: 'Main Description has max 500 character!' },
                    { whitespace: true },
                  ]}
                  name="description"
                >
                  <TextArea className="!rounded !h-[120px]" placeholder="" />
                </Form.Item>
              </LabelItemProject>
              <LabelItemProject width label="Category (website, adon, extension, app, other...)">
                <Form.Item
                  className="!mb-0"
                  name="category"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: 'Category is missing!',
                  //   },
                  //   {
                  //     max: 30,
                  //     message: 'Category has max 30 character!',
                  //   },
                  // ]}
                >
                  <Input className="!rounded" placeholder="" />
                </Form.Item>
              </LabelItemProject>
              <LabelItemProject label="Programming Language">
                <Form.Item
                  className="!mb-0"
                  name="programingLanguage"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: 'You must choose or enter programing language!',
                  //   },
                  // ]}
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    //defaultValue="ReactJs"
                  >
                    <Option value="reactJs">ReactJs</Option>
                    <Option value="java">Java</Option>
                    <Option value="nodeJs">NodeJs</Option>
                    <Option value="php">Php</Option>
                    <Option value="c">C</Option>
                  </Select>
                </Form.Item>
              </LabelItemProject>
              <LabelItemProject label="Framework">
                <Form.Item
                  className="!mb-0"
                  name="framework"
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: 'You must choose or enter framework!',
                  //   },
                  // ]}
                >
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    //defaultValue="ReactJs"
                  >
                    <Option value="reactJs">ReactJs</Option>
                    <Option value="java">Java</Option>
                    <Option value="nodeJs">NodeJs</Option>
                    <Option value="php">Php</Option>
                    <Option value="c">C</Option>
                  </Select>
                </Form.Item>
              </LabelItemProject>

              <LabelItemProject width label="Budget">
                <Form.Item name="budget">
                  <CurrencyItem />
                </Form.Item>
              </LabelItemProject>

              <LabelItemProject width label="Time to do">
                <Form.Item className="!mb-0" name="timeToDo">
                  {/* <Input className="!rounded" placeholder="" /> */}
                  <div className="flex items-center">
                    From
                    <span className="mx-1">
                      <DatePicker
                        className="!rounded !p-0 custom-mize-datepicker"
                        format="YYYY-MM-DD HH:mm:ss"
                        // disabledDate={disabledDate}
                        suffixIcon={<AiOutlineCalendar className="text-2xl text-black" />}
                        // disabledTime={disabledDateTime}
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                      />
                    </span>
                    To
                    <span className="mx-1">
                      <DatePicker
                        className="!rounded custom-mize-datepicker !p-0"
                        suffixIcon={<AiOutlineCalendar className="text-2xl text-black" />}
                        format="YYYY-MM-DD HH:mm:ss"
                        // disabledDate={disabledDate}
                        // disabledTime={disabledDateTime}
                        showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                      />
                    </span>
                  </div>
                </Form.Item>
              </LabelItemProject>
              <LabelItemProject width label="Recruit members after done">
                <Switch defaultChecked />
              </LabelItemProject>
              <LabelItemProject width label="Salary estimated at that time">
                <Form.Item name="salary">
                  <CurrencyItem />
                </Form.Item>
              </LabelItemProject>
              <Form.List name={`attachments`}>
                {() => (
                  <>
                    <LabelItemProject label="Main picture" rules>
                      <Form.Item
                        name="main_picture"
                        className="text-sm custom-mize text-gray-700"
                        rules={[
                          {
                            required: true,
                            message: 'Image is missing!',
                          },
                        ]}
                      >
                        <ImageSingleUpload
                          isBorder
                          isDelete
                          isFull
                          icon={<ImageIcon className="text-4xl mx-auto" />}
                        />
                      </Form.Item>
                    </LabelItemProject>
                    <LabelItemProject label="Pitch Deck" rules>
                      <Form.Item
                        name=""
                        className="text-sm text-gray-700"
                        rules={[
                          {
                            required: true,
                            message: 'Image is missing!',
                          },
                        ]}
                      >
                        <ImageSingleUpload
                          isBorder
                          isDelete
                          isFull
                          // icon={<FcAddDatabase className="text-4xl mx-auto" />}
                          // icon="/public/assets/images/background_default.png"
                          icon={<IconDatabasePlus className="text-4xl mx-auto" />}
                        />
                      </Form.Item>
                    </LabelItemProject>
                    <LabelItemProject label="Other files">
                      <Form.Item name="" className="text-sm text-gray-700">
                        <ImageSingleUpload
                          isBorder
                          isDelete
                          isFull
                          // icon={<FcAddDatabase className="text-4xl mx-auto" />}
                          icon={<IconDatabasePlus className="text-4xl mx-auto" />}
                        />
                      </Form.Item>
                    </LabelItemProject>
                  </>
                )}
              </Form.List>
            </>
          )}
        </Form.List>
        <LabelItemProject width label="Are you involved in the project?">
          <Switch defaultChecked />
        </LabelItemProject>

        <LabelItemProject label="Privacy">
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
            <div className="bg-white rounded-md -space-y-px">
              {settings.map((setting, settingIdx) => (
                <RadioGroup.Option
                  key={setting.name}
                  value={setting}
                  className={({ checked }) =>
                    classNames(
                      settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                      settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                      checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                      'relative border p-4 flex cursor-pointer focus:outline-none'
                    )
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <span
                        className={classNames(
                          checked ? 'bg-[#0369A1] border-transparent' : 'bg-white border-gray-300',
                          active ? 'ring-2 ring-offset-2 ring-[#0369A1]' : '',
                          'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                        )}
                        aria-hidden="true"
                      >
                        <span className="rounded-full bg-white w-1.5 h-1.5" />
                      </span>
                      <div className="ml-3 flex flex-col">
                        <RadioGroup.Label
                          as="span"
                          className={classNames(
                            checked ? 'text-[#0369A1]' : 'text-gray-900',
                            'block text-sm font-medium'
                          )}
                        >
                          {setting.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={classNames(
                            checked ? 'text-[#0369A1]' : 'text-gray-500',
                            'block text-sm'
                          )}
                        >
                          {setting.description}
                        </RadioGroup.Description>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </LabelItemProject>

        <div className="flex space-x-2 justify-end p-3">
          <Form.Item>
            <Button
              className="!rounded-md"
              size="large"
              onClick={() => dispatch(setProjectMerge('cProject', { isOpen: false }))}
            >
              Cancel
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              className="!rounded-md"
              type="primary"
              size="large"
              htmlType="submit"
              loading={cProject.isLoading}
            >
              Create
            </Button>
          </Form.Item>
        </div>
      </Form>
    </section>
  );
};

export default NewProject;
