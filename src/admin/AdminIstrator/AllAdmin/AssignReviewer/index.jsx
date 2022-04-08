import React, { useEffect } from 'react';
import { Select, Button } from 'antd';
import { FormAssign } from './FormAssign';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, myListUser } from 'pages/user/userSlice';
import { thumbImage } from '../../../../services/convert';

export const AssignReviewer = () => {
  const dispatch = useDispatch();
  const { mlUser } = useSelector(userSelector);
  useEffect(() => {
    dispatch(myListUser());
  }, [dispatch]);

  const { Option } = Select;

  function handleChange(value) {}
  return (
    <div>
      <span className="flex items-center justify-center text-3xl text-[#9CA3AF]">
        <HiOutlineUserGroup className="!w-[40px] !h-[32px] stroke-0" />
      </span>
      <h4 className="text-lg text-center pt-2">Assign Reviewer</h4>
      <div className="w-80% flex py-6 ">
        <Select
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
        </Select>

        <Button type="primary " className="pl-5">
          Send invite
        </Button>
      </div>
      <p className="text-xs">RECOMMENDED TEAM MEMBERS</p>
      <div className="grid grid-cols-2 gap-3">
        {(mlUser?.myListUser ?? []).map((item, index) => {
          return (
            <div key={index}>
              <FormAssign
                item={item}
                nameAssign={item?.name}
                goalAssign={item?.userAdvance?.goal}
                imgAssign={thumbImage(item?.avatar_attachment?.file)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
