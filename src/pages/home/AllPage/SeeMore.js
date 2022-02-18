import React from "react";
import { Divider, Button } from "antd";
import { IoMdAdd } from "react-icons/io";

export const SeeMore = () => {
  return (
    <Divider plain>
      <Button className="!rounded-full !h-[34px] hover:!bg-[#F97316] hover:!text-white">
        <div className="flex items-center text-sm text-gray-700 space-x-1">
          <IoMdAdd className="text-gray-400" />
          <span>See more</span>
        </div>
      </Button>
    </Divider>
  );
};
