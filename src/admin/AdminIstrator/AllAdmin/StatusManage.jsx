import { InformationMember } from 'admin/AdminIstrator/MemberAdmin/AllMember/InformationMember';
import { Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

import { AiOutlineStar } from 'react-icons/ai';
const dataInformationMember = [
  {
    nameMember: 'Alidabet',
    goadMember: 'Leader',
    emailMember: '123@gmail.com',
    phoneMember: '0905797979',
  },
];
export const StatusManage = () => {
  return (
    <div>
      <h5 className="font-semibold text-sm text-gray-800">Review Members</h5>
      <p className="-mt-2 font-medium text-xs text-gray-500">Reviews are public and editable. </p>
      <div className="flex items-center space-x-4">
        <div className="w-1/3">
          {(dataInformationMember ?? []).map((item, index) => {
            return (
              <div key={index}>
                <InformationMember
                  nameMember={item?.nameMember}
                  goadMember={item?.goadMember}
                  emailMember={item?.emailMember}
                  phoneMember={item?.phoneMember}
                />
              </div>
            );
          })}
        </div>
        <div className="w-2/3">
          <p className="font-medium text-xs text-gray-500">Rating required</p>
          <div className="flex items-center -space-x-2">
            <AiOutlineStar className="w-[55px] h-[52px]" />
            <AiOutlineStar className="w-[55px] h-[52px]" />
            <AiOutlineStar className="w-[55px] h-[52px]" />
            <AiOutlineStar className="w-[55px] h-[52px]" />
            <AiOutlineStar className="w-[55px] h-[52px]" />
            <AiOutlineStar className="w-[55px] h-[52px]" />
            <AiOutlineStar className="w-[55px] h-[52px]" />
            <AiOutlineStar className="w-[55px] h-[52px]" />
            <AiOutlineStar className="w-[55px] h-[52px]" />
            <AiOutlineStar className="w-[55px] h-[52px]" />
          </div>
          <p className="font-medium text-xs text-gray-500">Feedback</p>
          <TextArea className="!h-[195px] !rounded" />
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-5">
        <Button className="font-medium text-xs !rounded-lg">Cancel</Button>
        <Button type="primary" className="font-medium text-xs !rounded-lg">
          {' '}
          Confirm
        </Button>
      </div>
    </div>
  );
};
