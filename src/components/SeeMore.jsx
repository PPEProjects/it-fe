import React from 'react';
import { Divider } from 'antd';
import { IoMdAdd } from 'react-icons/io';

export const SeeMore = ({ onClick, name }) => {
  return (
    <Divider plain>
      <div
        onClick={onClick}
        className="!rounded-full border cursor-pointer py-2.5 px-3.5 !h-[34px] hover:!bg-[#F97316] flex items-center hover:!text-white text-sm text-gray-700 space-x-1"
      >
        <IoMdAdd className="stroke-4" />
        <span>{name}</span>
      </div>
    </Divider>
  );
};
