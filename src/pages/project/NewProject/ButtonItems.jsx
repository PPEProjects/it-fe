import React from 'react';
import { Button } from 'antd';
import { IoMdAdd } from 'react-icons/io';
export const ButtonItems = () => {
  return (
    <div>
      <Button className="!rounded-2xl">
        <div className="hover:!text-[#0369A1] flex items-center space-x-2 text-sm font-medium  ">
          <IoMdAdd className="text-lg stroke-1 " />
          <span className=" -mt-0.5">Co-author</span>
        </div>
      </Button>
    </div>
  );
};
