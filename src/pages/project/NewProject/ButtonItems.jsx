import React from 'react';
import { Button } from 'antd';
import { GrFormAdd } from 'react-icons/gr';
export const ButtonItems = () => {
  return (
    <div>
      <Button className="flex items-center space-x-2 text-sm font-medium !rounded-2xl">
        <GrFormAdd className="text-lg stroke-1" />
        <span className="text-[#374151] -mt-0.5">Co-author</span>
      </Button>
    </div>
  );
};
