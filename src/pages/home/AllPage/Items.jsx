import React from 'react';

import { AiOutlineLike } from 'react-icons/ai';
import { IoIosReturnRight } from 'react-icons/io';

export const Items = ({ name, contents, numberLike, status, time, feedBack, number }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-full">
          <img src="https://i.pravatar.cc/100?img=2" alt="" className="w-14 rounded-full" />
        </div>
        <div className="">
          <span className="font-medium text-sm text-[#111827]">{name}</span>
          <br />
          <span className=" text-[#374151]">{contents}</span>
          <div className="flex space-x-8">
            <div className="flex items-center  space-x-1">
              <AiOutlineLike className="text-xl text-[#374151] stroke-[20px]" />
              <span>{numberLike}</span>
            </div>
            <span>{status}</span>
            <span>{time}</span>
          </div>
          {feedBack && (
            <div className="flex items-center mt-3">
              <IoIosReturnRight className="stroke-[30px] text-lg" />
              <span>{number}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
