import React, { useEffect, useState } from 'react';
import { Select, Button } from 'antd';
import { FormAssign } from './FormAssign';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, myListUser } from 'pages/user/userSlice';
import { thumbImage } from '../../../../services/convert';
import { GrFormAdd } from 'react-icons/gr';

export const AssignReviewer = () => {
  const dispatch = useDispatch();
  const { mlUser } = useSelector(userSelector);
  useEffect(() => {
    dispatch(myListUser());
  }, [dispatch]);

  const { Option } = Select;
  const OPTIONS = mlUser?.myListUser;
  // const OPTIONS = [
  //   {
  //     id: '1',
  //     name: 'Trọng 1',
  //     email: 'trongnguyenquoc113@gmail.com',
  //     phone_number: 'aaaaaaaaaaaaa',
  //     avatar_attachment: null,
  //     userAdvance: {
  //       id: '3',
  //       roles: ['project_review', ''],
  //       goal: 'Frontend',
  //       plan: 'Co gang',
  //       userId: '20465',
  //       __typename: 'UserAdvance',
  //     },
  //     __typename: 'User',
  //   },
  //   {
  //     id: '2',
  //     name: 'Trọng2',
  //     email: 'trongnguyenquoc113@gmail.com',
  //     phone_number: 'aaaaaaaaaaaaa',
  //     avatar_attachment: null,
  //     userAdvance: {
  //       id: '3',
  //       roles: ['project_review', ''],
  //       goal: 'Frontend',
  //       plan: 'Co gang',
  //       userId: '20465',
  //       __typename: 'UserAdvance',
  //     },
  //     __typename: 'User',
  //   },
  //   {
  //     id: '3',
  //     name: 'Trọng 3',
  //     email: 'trongnguyenquoc113@gmail.com',
  //     phone_number: 'aaaaaaaaaaaaa',
  //     avatar_attachment: null,
  //     userAdvance: {
  //       id: '3',
  //       roles: ['project_review', ''],
  //       goal: 'Frontend',
  //       plan: 'Co gang',
  //       userId: '20465',
  //       __typename: 'UserAdvance',
  //     },
  //     __typename: 'User',
  //   },
  // ];
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter(item => !selectedItems.includes(item.name));

  const handlerChangeUser = item => {
    setSelectedItems([...selectedItems, item.name]);
    // console.log('selectedItems', item?.id);
  };

  // const arrayFillter = (mlUser?.myListUser ?? []).map((item, index) => {
  //   return (
  //     <div key={index}>
  //       <pre>{JSON.stringify(item, null, ' ')}</pre>
  //     </div>
  //   );
  // });

  // function handleChange(value) {}
  return (
    <div>
      <span className="flex items-center justify-center text-3xl text-[#9CA3AF]">
        <HiOutlineUserGroup className="!w-[40px] !h-[32px] stroke-0" />
      </span>
      <h4 className="text-lg text-center pt-2">Assign Reviewer</h4>
      <div className="w-80% flex py-6 ">
        {/* <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="select"
          defaultValue={['china']}
          onChange={handleChange}
          optionLabelProp="label"
        >
          <Option
            value={mlUser?.myListUser?.email}
            label={mlUser?.myListUser?.email}
            placeholder={mlUser?.myListUser?.email}
          >
            <div className="demo-option-label-item">
              <span role="img" aria-label={mlUser?.myListUser?.email}></span>
            </div>
          </Option>
        </Select> */}
        {/* {arrayFillter} */}
        <Select
          mode="multiple"
          placeholder="Inserted are removed"
          value={selectedItems}
          // handleChange={handleChange}
          style={{ width: '100%' }}
        >
          {/* {arrayFillter} */}
          {/* {arrayFillter.map((item, index) => {
            return (
              <Select.Option key={index} value={item.name}>
                {item?.name}
              </Select.Option>
            );
          })} */}
          {/* {arrayFillter.map((item, index) => {
            return (
              <>
                <Select.Option key={index} value={item}>
                  <pre>{JSON.stringify(item, null, ' ')}</pre>
                </Select.Option>
              </>
            );
          })} */}
        </Select>
        {/* {arrayFillter} */}
        {/* <pre> {JSON.stringify(filteredOptions, null, ' ')} </pre> */}
        {/* {selectedItems.map((item, index) => {
          return (
            <>
              <pre> {JSON.stringify(item?.name, null, ' ')} </pre>
            </>
          );
        })} */}

        <Button type="primary " className="pl-5">
          Send invite
        </Button>
      </div>
      {/* <pre>{JSON.stringify(arrayFillter, null, ' ')}</pre> */}
      <p className="text-xs">RECOMMENDED TEAM MEMBERS</p>
      <div className="grid grid-cols-2 gap-3">
        {filteredOptions.map((item, index) => {
          return (
            <div key={index}>
              {/* <FormAssign
                handleChange={handleChange}
                item={item}
                nameAssign={item?.name}
                goalAssign={item?.userAdvance?.goal}
                imgAssign={thumbImage(item?.avatar_attachment?.file)}
              /> */}
              <div className="h-[58px] border rounded-full px-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={thumbImage(item?.avatar_attachment?.file)}
                    alt=""
                    className="rounded-full w-[40px] h-[40px]"
                  />
                  <div>
                    <h6 className="-mb-1">{item?.name}</h6>
                    <h7 className="-mt-5">{item?.userAdvance?.goal}</h7>
                  </div>
                </div>
                <GrFormAdd
                  onClick={() => handlerChangeUser(item)}
                  className="flex items-center justify-center text-3xl cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
