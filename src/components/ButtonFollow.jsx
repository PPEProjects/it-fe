import { Button } from 'antd';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

export const ButtonFollow = () => {
  return (
    <div className="flex items-center justify-end">
      <Button className="!bg-orange-500 flex items-center justify-center space-x-2 !rounded-lg">
        <AiOutlineHeart className="text-white w-3" />
        <span className="text-white font-medium text-xs">Following</span>
      </Button>
    </div>
  );
};
