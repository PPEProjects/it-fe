import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Switch, Button, Radio } from 'antd';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { createProject, projectSelector, setProjectMerge } from 'pages/project/projectSlice';
import { getMe, userSelector } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyItem } from 'components/CurrencyItem';
import { Image } from '@tienlucky/storage';
import { LabelItemProject } from './LabelItemProject';

import { BsFillInfoCircleFill } from 'react-icons/bs';
import { AiFillInfoCircle } from 'react-icons/ai';

import { ReactComponent as IconDatabase } from 'assets/database.svg';

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

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

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
              <LabelItemProject label="Idea/Project name">
                <Form.Item className="!mb-0" rules={[{ required: true }]} name="name">
                  <Input className="!rounded" placeholder="" />
                </Form.Item>
              </LabelItemProject>
              <LabelItemProject flex label="Main author name">
                <Form.Item className="w-1/2 !mb-0" rules={[{ required: true }]}>
                  <Input value={me?.data?.name} disabled className="!rounded" placeholder="" />
                </Form.Item>
                <div className="w-1/2 !pl-4 space-y-3">
                  <div className="flex items-center">
                    <label className="text-sm w-[60px] text-gray-700">Email</label>
                    <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                      <Input className="!rounded" value={me?.data?.email} disabled />
                    </Form.Item>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm w-[60px] text-gray-700">Phone</label>
                    <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                      <Input className="!rounded" value={me?.data?.phone_number} disabled />
                    </Form.Item>
                  </div>
                </div>
              </LabelItemProject>
              <LabelItemProject flex label="Co-author name">
                <Form.Item className="w-1/2 !mb-0" rules={[{ required: true }]}>
                  <Input value={me?.data?.name} className="!rounded" placeholder="" />
                </Form.Item>
                <div className="w-1/2 !pl-4 space-y-3">
                  <div className="flex items-center">
                    <label className="text-sm w-[60px] text-gray-700">Email</label>
                    <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                      <Input className="!rounded" value={me?.data?.email} />
                    </Form.Item>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm w-[60px] text-gray-700">Phone</label>
                    <Form.Item className="!mb-0 w-full" rules={[{ required: true }]}>
                      <Input className="!rounded" value={me?.data?.phone_number} />
                    </Form.Item>
                  </div>
                </div>
              </LabelItemProject>
              <LabelItemProject label="Main description">
                <Form.Item className="!mb-0" rules={[{ required: true }]} name="description">
                  <TextArea className="!rounded !h-[120px]" placeholder="" />
                </Form.Item>
              </LabelItemProject>
              <LabelItemProject width label="Category (website, adon, extension, app, other...)">
                <Form.Item className="!mb-0" name="category">
                  <Input className="!rounded" placeholder="" />
                </Form.Item>
              </LabelItemProject>
              <LabelItemProject label="Programming Language">
                <Form.Item className="!mb-0" name="programingLanguage">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue="ReactJs"
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
                <Form.Item className="!mb-0" name="framework">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    defaultValue="ReactJs"
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
                  <Input className="!rounded" placeholder="" />
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
                    <LabelItemProject label="Main picture">
                      <Form.Item name="main_picture" className="text-sm text-gray-700">
                        <Image.SingleUpload isBorder isDelete isFull />
                      </Form.Item>
                    </LabelItemProject>
                    <LabelItemProject label="Pitch Deck">
                      <Form.Item name="" className="text-sm text-gray-700">
                        <Image.SingleUpload isBorder isDelete isFull />
                      </Form.Item>
                    </LabelItemProject>
                    <LabelItemProject label="Other files">
                      <Form.Item name="" className="text-sm text-gray-700">
                        <Image.SingleUpload isBorder isDelete isFull />
                      </Form.Item>
                    </LabelItemProject>
                  </>
                )}
              </Form.List>

              {/* <div className="flex border-b p-3">
                <label className="w-1/3 text-sm text-gray-700">Pitch Deck</label>
                <button
                  type="button"
                  className="relative w-2/3 block border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <p className="flex items-center justify-center">
                    {' '}
                    <IconDatabase className="!w-[38px] !h-[40px]" />
                  </p>
                  <span className="mt-2 text-sm flex items-center space-x-1 justify-center font-medium text-gray-900 text-[14px]">
                    <a href>Upload a file</a>
                    <span>or drag and drop</span>
                  </span>
                  <span className="text-[12px] text-gray-400">PNG, JPG, up to 10MB</span>
                </button>
              </div>
              <div className="flex border-b p-3">
                <label className="w-1/3 text-sm text-gray-700 flex items-center space-x-2">
                  <span>Other files</span>
                  <AiFillInfoCircle className="text-lg text-gray-400" />
                </label>
                <button
                  type="button"
                  className="relative w-2/3 block border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <p className="flex items-center justify-center">
                    {' '}
                    <IconDatabase className="!w-[38px] !h-[40px]" />
                  </p>
                  <span className="mt-2 text-sm flex items-center space-x-1 justify-center font-medium text-gray-900 text-[14px]">
                    <a href>Upload a file</a>
                    <span>or drag and drop</span>
                  </span>
                  <span className="text-[12px] text-gray-400">PNG, JPG, up to 10MB</span>
                </button>
              </div> */}
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
