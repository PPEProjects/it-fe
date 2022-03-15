import { Button } from 'antd';
import React from 'react';
import { ReactComponent as IconMenuComment } from 'assets/menu-comment-icon.svg';
import { BsChevronDown } from 'react-icons/bs';
export const ButtonSort = () => {
  return (
    <div>
      <Button className="flex items-center justify-center space-x-2 !rounded-lg">
        <IconMenuComment />
        <span>Sort</span>
        <BsChevronDown />
      </Button>
    </div>
  );
};
