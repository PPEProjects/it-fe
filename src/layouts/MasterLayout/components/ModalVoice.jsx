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
        <span className="text-lg font-semibold text-[#1F2937]">Listening...</span>
      </div>
      <div className="h-[150px]"></div>
      <div className="mx-[40%] w-20 h-20 rounded-full border-inherit">
        <Button className="!bg-[#EF4444] !rounded-full !w-16 !h-16 ">
          <BsMicFill className="text-[#F9FAFB] text-2xl m-auto" />
        </Button>
      </div>
    </div>
  );
};
