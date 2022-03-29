import React from 'react';

import { Button } from 'antd';
import { MdLanguage } from 'react-icons/md';
import { BsMicFill } from 'react-icons/bs';
export const ModalVoice = () => {
  return (
    <div>
      <div className="flex space-x-1">
        <p className="text-[#1F2937] text-sm ">English (United States)</p>
        <MdLanguage className="mt-0.5 text-[#9CA3AF] text-base" />
      </div>
      <div>
        <span className="text-lg font-semibold text-[#1F2937]">Didn't hear that. Try again.</span>
      </div>
      <div className="h-[150px]"></div>
      <div className="mx-[40%] w-20 h-20 rounded-full border-inherit">
        <Button className="!bg-[#E5E7EB] !rounded-full !w-16 !h-16 ">
          <BsMicFill className="text-[#6B7280] text-2xl m-auto" />
        </Button>
      </div>
      <div className=" -mt-3">
        <span className="mx-[25%] text-sm text-gray-800 font-medium">
          Tap microphone to try again.
        </span>
      </div>
    </div>
  );
};
