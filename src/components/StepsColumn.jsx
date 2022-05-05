// import React, { useState } from 'react';
// import { AiOutlineCheck } from 'react-icons/ai';
// import { BiChevronDown } from 'react-icons/bi';
// import classNames from 'classnames';
// import { updateStatusProject } from 'pages/project/projectSlice';
// import { useDispatch } from 'react-redux';

// export const StepsColumn = ({
//   current,
//   iconDropdown,
//   children,
//   StepsEnum,
//   uppercase,
//   item,
//   closeModal,
// }) => {
//   const _current = StepsEnum.indexOf(current);
//   const max_length = StepsEnum.length;
//   const dispatch = useDispatch();
//   const [isShow, setIsShow] = useState(false);

//   return (
//     <div className="border rounded p-3">
//       <pre> {JSON.stringify(item, null, ' ')} </pre>
//       <ul className="space-y-3">
//         {StepsEnum.map((step, index) => (
//           <li
//             key={step}
//             className={classNames(
//               'relative flex items-center justify-between',
//               index !== max_length - 1 ? 'pb-10' : ''
//             )}
//           >
//             <a
//               onClick={() => {
//                 const values = { status: step, id: item?.id };
//                 dispatch(updateStatusProject({ data: values }));
//                 // closeModal();
//               }}
//               href
//               className="flex items-center text-gray-400 space-x-2"
//             >
//               <div
//                 className={classNames(
//                   'step-circle z-10',
//                   _current >= index ? 'bg-[#0369A1]' : 'text-[#0369A1] bg-white'
//                 )}
//               >
//                 {_current >= index ? (
//                   <AiOutlineCheck className="w-5 h-5 text-white" />
//                 ) : (
//                   <span className="h-9 flex items-center">
//                     <span
//                       className={classNames(
//                         'relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full',
//                         _current === index - 1 ? 'border-[#0369A1]' : 'border-gray-400'
//                       )}
//                     >
//                       {_current === index - 1 && (
//                         <span className="h-2.5 w-2.5 bg-[#0369A1] rounded-full" />
//                       )}
//                     </span>
//                   </span>
//                 )}
//               </div>

//               {index !== max_length - 1 ? (
//                 <div className="-ml-px absolute mt-0.5 top-6 left-1.5 w-0.5 h-full bg-gray-300" />
//               ) : null}
//               <span
//                 className={classNames(
//                   'font-medium ml-1.5',
//                   _current >= index && 'text-gray-900',
//                   _current === index - 1 && 'text-[#0369A1]',
//                   {
//                     uppercase: uppercase,
//                   }
//                 )}
//               >
//                 {step}
//               </span>
//             </a>
//             {iconDropdown && (
//               <>
//                 {index === max_length - 1 && (
//                   <div>
//                     <BiChevronDown
//                       onClick={() => setIsShow(!isShow)}
//                       className={classNames(
//                         'text-3xl text-gray-400 ease-in-out duration-500',
//                         isShow ? 'rotate-180' : ''
//                       )}
//                     />
//                   </div>
//                 )}
//               </>
//             )}
//           </li>
//         ))}
//         {isShow && <div>{children}</div>}
//       </ul>
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import classNames from 'classnames';
import { updateStatusProject } from 'pages/project/projectSlice';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Modal } from 'antd';
import { detailProject, projectSelector } from 'pages/project/projectSlice';
import { useSelector } from 'react-redux';

export const StepsColumn = ({
  current,
  iconDropdown,
  children,
  StepsEnum,
  uppercase,
  item,
  closeModal,
  dataStuck,
}) => {
  const _current = StepsEnum.indexOf(current);
  const max_length = StepsEnum.length;
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const StepsEnumStuck = ['done', 'stuck'];
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { deProject } = useSelector(projectSelector);

  // useEffect(() => {
  //   dispatch(detailProject(item?.id));
  //   // console.log('deProject', deProject?.detailProjectIds);
  // }, [dataStuck]);
  // // console.log('item, form', item, form);

  useEffect(() => {
    form.setFieldsValue({
      data: {
        id: item?.id,
        status: 'stuck',
        contentStatus: item?.contentStatus,
      },
    });
  });

  // useEffect(() => {
  //   console.log('deProject?.detailProjectIds');
  // }, [dataStuck]);

  // console.log('item', item);
  const pathName = window.location.pathname;

  // console.log('windown', );

  return (
    <div>
      {/* <pre> {JSON.stringify(item, null, ' ')} </pre> */}

      {pathName === '/ProjectManager' ? (
        <ul className="space-y-3">
          {StepsEnum.map((step, index) => (
            <li
              key={step}
              className={classNames(
                'relative flex items-center justify-between',
                index !== max_length - 1 ? 'pb-2' : ''
              )}
            >
              <a
                onClick={() => {
                  const values = { status: step, id: item?.id };
                  dispatch(updateStatusProject({ data: values }));
                  closeModal();
                }}
                href
                className="flex items-center text-gray-400 space-x-2"
              >
                <div
                  className={classNames(
                    'step-circle z-10',
                    _current >= index ? 'bg-[#0369A1]' : 'text-[#0369A1] bg-white'
                  )}
                >
                  {_current >= index ? (
                    <AiOutlineCheck className="w-5 h-5 text-white" />
                  ) : (
                    <span className="h-9 flex items-center">
                      <span
                        className={classNames(
                          'relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full',
                          _current === index - 1 ? 'border-[#0369A1]' : 'border-gray-400'
                        )}
                      >
                        {_current === index - 1 && (
                          <span className="h-2.5 w-2.5 bg-[#0369A1] rounded-full" />
                        )}
                      </span>
                    </span>
                  )}
                </div>

                {index !== max_length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-6 left-1.5 w-0.5 h-full bg-gray-300" />
                ) : null}
                <span
                  className={classNames(
                    'font-medium ml-1.5',
                    _current >= index && 'text-gray-900',
                    _current === index - 1 && 'text-[#0369A1]',
                    {
                      uppercase: uppercase,
                    }
                  )}
                >
                  {step}
                </span>
              </a>
              <>
                {index === max_length - 1 && (
                  <div>
                    <BiChevronDown
                      onClick={() => setIsShow(!isShow)}
                      className={classNames(
                        'text-3xl text-gray-400 ease-in-out duration-500',
                        isShow ? 'rotate-180' : ''
                      )}
                    />
                  </div>
                )}
              </>
            </li>
          ))}
          {isShow && (
            <div className="rounded">
              <div className=" relative items-center justify-between">
                <ul className="">
                  {StepsEnumStuck.map((step, index) => {
                    return (
                      <div>
                        {step === 'done' && (
                          <li
                            key={step}
                            className={classNames(
                              'relative items-center justify-between step-border px-2 py-5 border border-sky-200 rounded-t-lg'
                            )}
                          >
                            <a
                              onClick={() => {
                                const values = { status: step, id: item?.id };
                                dispatch(updateStatusProject({ data: values }));
                                closeModal();
                              }}
                              href
                              className="flex items-center text-gray-400 space-x-2"
                            >
                              <div
                                className={
                                  item.status === 'done'
                                    ? 'flex justify-center items-center rounded-full border-2 border-primary-500 flex-shrink-0 w-4 h-4 z-10  bg-[#0369A1]'
                                    : 'flex justify-center items-center rounded-full border-2 border-primary-500 flex-shrink-0 w-4 h-4 z-10 '
                                }
                              >
                                {item.status === 'done' ? (
                                  <AiOutlineCheck className="w-3 h-3 text-white" />
                                ) : (
                                  <span className="h-4 flex items-center">
                                    <span
                                      className={classNames(
                                        'relative z-10 w-3 h-3 flex items-center justify-center bg-white border-2 rounded-full',
                                        item.status === 'index - 1'
                                          ? 'text-[#0369A1] bg-white'
                                          : ' bg-[#0369A1]'
                                      )}
                                    >
                                      {item.status === 'index - 1' && (
                                        <span className="h-2.5 w-2.5 bg-[#0369A1] rounded-full" />
                                      )}
                                    </span>
                                  </span>
                                )}
                              </div>
                              <span
                                className={classNames(
                                  'font-medium ml-1.5',
                                  item.status === 'index - 1' && 'text-[#0369A1]',
                                  {
                                    uppercase: uppercase,
                                  }
                                )}
                              >
                                {step}
                              </span>
                            </a>
                            <div className="relative !left-6">
                              Congratulation! Your project is done!
                            </div>
                          </li>
                        )}

                        {/* datvnt */}
                        {step === 'stuck' && (
                          <li
                            key={step}
                            className={classNames(
                              'relative items-center justify-between px-2 py-5 border border rounded-b-lg',
                              index !== max_length - 1 ? 'pb-5' : ''
                            )}
                          >
                            <a
                              onClick={() => {
                                const values = { status: step, id: item?.id };
                                dispatch(updateStatusProject({ data: values }));
                                // closeModal();
                              }}
                              href
                              className="flex items-center text-gray-400 space-x-2"
                            >
                              <div
                                className={
                                  item.status === 'stuck'
                                    ? 'flex justify-center items-center rounded-full border-2 border-primary-500 flex-shrink-0 w-4 h-4 z-10  bg-[#0369A1]'
                                    : 'flex justify-center items-center rounded-full border-2 border-primary-500 flex-shrink-0 w-4 h-4 z-10 '
                                }
                              >
                                {item.status === 'stuck' ? (
                                  <AiOutlineCheck className="w-3 h-3 text-white" />
                                ) : (
                                  <span className="h-4 flex items-center">
                                    <span
                                      className={classNames(
                                        'relative z-10 w-3 h-3 flex items-center justify-center bg-white border-2 rounded-full',
                                        item?.status === index - 1
                                          ? 'text-[#0369A1] bg-white'
                                          : ' bg-[#0369A1]'
                                      )}
                                    >
                                      {_current === index - 1 && (
                                        <span className="h-2.5 w-2.5 bg-[#0369A1] rounded-full" />
                                      )}
                                    </span>
                                  </span>
                                )}
                              </div>
                              <span
                                className={classNames(
                                  'font-medium ml-1.5',
                                  item?.status >= index && 'text-gray-900',
                                  item?.status === index - 1 && 'text-[#0369A1]',
                                  {
                                    uppercase: uppercase,
                                  }
                                )}
                              >
                                {step}
                              </span>
                            </a>
                            <div className="relative">
                              <div className="relative !left-6">
                                Your project is stuck. Give us feedback.
                              </div>
                              <div className="relative !left-6 absolute">
                                <Form
                                  name="basic"
                                  // onFinish={values => console.log('values', values)}
                                  onFinish={values => {
                                    dispatch(updateStatusProject(values));
                                    closeModal();
                                  }}
                                  layout="vertical"
                                  form={form}
                                >
                                  <Form.List name={`data`}>
                                    {() => (
                                      <>
                                        <Form.Item name="id" hidden>
                                          <Input />
                                        </Form.Item>
                                        <Form.Item name="status" hidden>
                                          <Input values="stuck" />
                                        </Form.Item>
                                        <Form.Item name="contentStatus">
                                          <TextArea
                                            rows={4}
                                            // defaultValue={deProject?.detailProjectIds?.contentStatus}
                                            className="rounded-lg"
                                            style={{ width: '90%' }}
                                          />
                                        </Form.Item>
                                        <Form.Item className="text-right !mr-12">
                                          <Button
                                            className="!w-[100px] !rounded-md "
                                            type="primary"
                                            size="large"
                                            htmlType="submit"
                                            // loading={vAuth.isLoading}
                                          >
                                            Confirm
                                          </Button>
                                        </Form.Item>
                                      </>
                                    )}
                                  </Form.List>
                                </Form>
                              </div>
                            </div>
                          </li>
                        )}
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </ul>
      ) : (
        <ul className="space-y-3">
          {StepsEnum.map((step, index) => (
            <li
              key={step}
              className={classNames(
                'relative flex items-center justify-between',
                index !== max_length - 1 ? 'pb-2' : ''
              )}
            >
              <a
                onClick={() => {
                  const values = { status: step, id: item?.id };
                  dispatch(updateStatusProject({ data: values }));
                  closeModal();
                }}
                href
                className="flex items-center text-gray-400 space-x-2"
              >
                <div
                  className={classNames(
                    'step-circle z-10',
                    _current >= index ? 'bg-[#0369A1]' : 'text-[#0369A1] bg-white'
                  )}
                >
                  {_current >= index ? (
                    <AiOutlineCheck className="w-5 h-5 text-white" />
                  ) : (
                    <span className="h-9 flex items-center">
                      <span
                        className={classNames(
                          'relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 rounded-full',
                          _current === index - 1 ? 'border-[#0369A1]' : 'border-gray-400'
                        )}
                      >
                        {_current === index - 1 && (
                          <span className="h-2.5 w-2.5 bg-[#0369A1] rounded-full" />
                        )}
                      </span>
                    </span>
                  )}
                </div>

                {index !== max_length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-6 left-1.5 w-0.5 h-full bg-gray-300" />
                ) : null}
                <span
                  className={classNames(
                    'font-medium ml-1.5',
                    _current >= index && 'text-gray-900',
                    _current === index - 1 && 'text-[#0369A1]',
                    {
                      uppercase: uppercase,
                    }
                  )}
                >
                  {step}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
