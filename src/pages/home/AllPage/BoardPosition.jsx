import React from "react";
import { Button } from "antd";

import { IoMdAdd } from "react-icons/io";

export const BoardPosition = ({ text, board, running, imgAvatar, done }) => {
  return (
    <section>
      <div className="text-center">
        {board && (
          <Button type="dashed" shape="circle" className="!w-[32px] !h-[32px]">
            <div className="flex items-center justify-center">
              <IoMdAdd className="text-gray-400" />
            </div>
          </Button>
        )}
        {running && (
          <img
            className="h-[32px] w-[32px] object-cover rounded-full cursor-pointer"
            src={imgAvatar}
            alt=""
          />
        )}
        {done && (
          <img
            className="h-[32px] w-[32px] object-cover rounded-full cursor-pointer"
            src={imgAvatar}
            alt=""
          />
        )}
        <div className="text-[10px]">{text}</div>
      </div>
    </section>
  );
};
