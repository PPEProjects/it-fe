import React from 'react';
import { Menu } from 'antd';

export const MenuItemHover = ({ nameMenu, item, onClick, roles, type }) => {
  return (
    <Menu.Item
      onClick={onClick}
      // onClick={() => {
      //   const values = { userId: item, roles: roles };
      //   type === 'add' ? dispatch(addAsPosition(values)) : dispatch(deleteAsPosition(values));
      // }}
      className="hover:!bg-[#F6F9FB] hover:!text-[#0369A1]"
    >
      {nameMenu}
    </Menu.Item>
  );
};
