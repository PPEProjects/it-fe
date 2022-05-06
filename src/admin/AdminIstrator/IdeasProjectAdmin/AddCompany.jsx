import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { userSelector, updateProject } from 'pages/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosAdd } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

export const AddCompany = ({ item, closeModal, setOnLoad }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { upProject } = useSelector(userSelector);

  useEffect(() => {
    form.setFieldsValue({
      data: {
        id: item?.id,
        companies: [item?.companies],
        status: 'in use',
      },
    });
  }, [form, item, dispatch]);

  return (
    <section>
      <span className="text-[18px] font-semibold text-gray-800">Add company</span>
      {/* <pre> {JSON.stringify(item, null, ' ')} </pre> */}
      <Form
        form={form}
        name="basic"
        onFinish={values => {
          dispatch(updateProject(values));
          closeModal();
        }}
        // onFinish={values => console.log('values in use', values)}
        scrollToFirstError
        layout="vertical"
        className="!py-4 bg-white space-y-3"
      >
        <Form.List name="data">
          {() => (
            <>
              <Form.List name="companies">
                {(fields, { add, remove }) => {
                  return (
                    <>
                      {fields.map(({ name }) => (
                        <div className="relative">
                          <Form.Item className="!mb-0" label="Company" name={[name]}>
                            <Input className="!rounded" />
                          </Form.Item>

                          <Form.Item name="status" hidden>
                            <Input className="!rounded" />
                          </Form.Item>

                          <span
                            className="text-red-500 absolute bottom-[5px] flex items-center cursor-pointer text-xl justify-center right-2"
                            onClick={() => remove(name)}
                          >
                            <MdDeleteForever />
                          </span>
                        </div>
                      ))}
                      <Button className="!rounded-full" onClick={() => add()}>
                        <div className="flex items-center space-x-1">
                          <IoIosAdd className="text-xl" />
                          <span>Company</span>
                        </div>
                      </Button>
                    </>
                  );
                }}
              </Form.List>
              <Form.Item name="id" hidden={true} />
            </>
          )}
        </Form.List>
        <Form.Item className="!mb-0 p-3 text-right">
          <Button
            className="!rounded-md !bg-blue-500"
            type="primary"
            size="large"
            htmlType="submit"
            // loading={upProject.isLoading}
            onClick={() => setOnLoad()}
          >
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};
