import React from 'react';
import { Menu } from 'antd';

export const MenuItemHover = ({ nameMenu, onClick }) => {
  return (
    <Menu.Item onClick={onClick} className="hover:!bg-[#F6F9FB] hover:!text-[#0369A1]">
      {nameMenu}
    </Menu.Item>
  );
};
