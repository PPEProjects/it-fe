import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from 'pages/user/userSlice';

import { RiUserFill } from 'react-icons/ri';
import { MdOutlineEventNote } from 'react-icons/md';

export const LayoutSetting = ({ children }) => {
  let href = window.location.href.replace(/^.+?\/(\w+)$/gim, '$1');
  const { me } = useSelector(userSelector);

  const renderMenu = () => {
    const menu = [
      {
        icon: <RiUserFill />,
        label: 'Account',
        key: 'Account',
        link: `/Account?id=${me?.data?.id}`,
      },
      {
        icon: <MdOutlineEventNote />,
        label: 'Profile',
        key: 'NewProfile',
        link: `/NewProfile?id=${me?.data?.id}`,
      },
    ];

    return (
      <Menu defaultSelectedKeys={[href]} mode="inline" className="rounded-lg font-medium text-base">
        {menu.map((item, i) => (
          <Menu.Item
            key={item.key}
            className="hover:!text-[#0369A1] hover:!bg-[#F6F9FB] hover:!rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <Link to={`${item.link}`} />
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  return (
    <MasterLayout>
      <section className="flex space-x-4 bg-[#F6F9FB] w-full ">
        <div className="w-[25%] p-3 ml-3">
          <h3 className="text-[#0369A1] text-[24px] mt-2">Settings</h3>
          <div className="!w-[96%]">{renderMenu()}</div>
        </div>
        <div className="w-[84%] !bg-[#FFFFFF] shadow-sm mt-3 rounded-md !mr-3">{children}</div>
      </section>
    </MasterLayout>
  );
};
