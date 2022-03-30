import React from 'react';
import { Items } from './Items';
import { Button } from 'antd';

export const ModalComment = () => {
  return (
    <div className="space-y-6">
      <div>
        <img
          src="https://i.pravatar.cc/100?img=2"
          alt=""
          className="w-[500px] h-[300px] stroke-current"
        />
      </div>
      <div className="flex items-center space-x-4">
        <img src="https://i.pravatar.cc/100?img=2" alt="" className="w-[32px] rounded-full" />
        <span className="w-1/2 text-sm font-semibold  text-[#0369A1]">
          Cay xanh cho ngoi nha yeu thuong
        </span>
      </div>
      <div className="space-y-5">
        <span className="text-lg font-medium text-[#1F2937]">Top Comment</span>
        <Items
          name="Eduardo Benz"
          contents="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. "
          numberLike="9"
          status="Ready"
          time="9h"
        />
        <Items
          name="Eduardo Benz"
          contents="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. "
          numberLike="9"
          status="Ready"
          time="9h"
        />
        <div className="text-center pb-5">
          <Button className="!w-[70%] !h-[34px] !text-gray-900 !font-[500] !rounded-lg">
            View all comment
          </Button>
        </div>
      </div>
    </div>
  );
};
