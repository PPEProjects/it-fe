import React from 'react';
import { Menu } from 'antd';

export const MenuItemHover = ({ nameMenu, onClick, disabled }) => {
  return (
    <Menu.Item
      disabled={disabled}
      onClick={onClick}
      className={disabled ? '' : 'hover:!bg-[#F6F9FB] hover:!text-[#0369A1]'}
    >
      {nameMenu}
    </Menu.Item>
  );
};
