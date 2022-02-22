import React from "react";
import { Divider, Button } from "antd";
import { IoMdAdd } from "react-icons/io";

export const SeeMore = () => {
  return (
    <Divider plain>
      <div className="!rounded-full border cursor-pointer py-2.5 px-3.5 !h-[34px] hover:!bg-[#F97316] flex items-center hover:!text-white text-sm text-gray-700 space-x-1">
        <IoMdAdd className="stroke-4" />
        <span>See more</span>
      </div>
    </Divider>
  );
};
