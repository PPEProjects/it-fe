import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from 'pages/user/userSlice';

import { BiNotepad, BiTask } from 'react-icons/bi';
import { BsSuitHeart } from 'react-icons/bs';
import { HiLightBulb } from 'react-icons/hi';

export const LayoutProject = ({ children }) => {
  let href = window.location.href.replace(/^.+?\/(\w+)$/gim, '$1');
  const { me } = useSelector(userSelector);

  const renderMenu = () => {
    const menu = [
      {
        icon: <HiLightBulb />,
        label: 'My Idea',
        key: 'MyIdeas',
        link: `/MyProject/MyIdeas?id=${me?.data?.id}`,
      },
      {
        icon: <BiNotepad />,
        label: 'My Project',
        key: 'NewProjectChildren',
        link: `/MyProject/MyProjectChildren?id=${me?.data?.id}`,
      },
      {
        icon: <BsSuitHeart />,
        label: 'Followed Idea/Project',
        key: 'FollowIdeaProject',
        link: `/MyProject/FollowIdeaProject?id=${me?.data?.id}`,
      },
      {
        icon: <BiTask />,
        label: 'Joined Project',
        key: 'JoinedProject',
        link: `/MyProject/JoinedProject?id=${me?.data?.id}`,
      },
    ];

    return (
      <Menu className="rounded-lg" defaultSelectedKeys={[href]} mode="inline">
        {menu.map((item, i) => (
          <Menu.Item key={item.key}>
            <div className="flex items-center space-x-2  ">
              <span className="text-base">{item.icon}</span>
              <span className="text-base font-medium">{item.label}</span>
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
          <h3 className="text-[#0369A1] text-[24px] mt-2">My Idea/Project</h3>
          <div>{renderMenu()}</div>
        </div>
        <div className="w-[91%] !mr-3">{children}</div>
      </section>
    </MasterLayout>
  );
};
