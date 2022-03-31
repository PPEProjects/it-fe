import { Button, Dropdown, Menu } from 'antd';
import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
export const ButtonSort = () => {
  const menu = () => {
    return (
      <Menu>
        <Menu.Item className="font-medium text-sm text-[#4B5563]">Newest First</Menu.Item>
        <Menu.Item className="font-medium text-sm text-[#4B5563]">Oldest First</Menu.Item>
      </Menu>
    );
  };
  return (
    <div className="flex items-center justify-between">
      <Dropdown overlay={menu} trigger={['click']}>
        <span className="cursor-pointer flex items-center space-x-2 border p-2 bg-white rounded-lg">
          <span className="font-medium text-sm text-[#4B5563]">Newest First</span>
          <AiOutlineDown className="text-gray-400 stroke-2" />
        </span>
      </Dropdown>
    </div>
  );
};
