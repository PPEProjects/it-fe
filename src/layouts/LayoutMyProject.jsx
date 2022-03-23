import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from 'pages/user/userSlice';

export const LayoutProject = ({ children }) => {
  let href = window.location.href.replace(/^.+?\/(\w+)$/gim, '$1');
  const { me } = useSelector(userSelector);

  const renderMenu = () => {
    const menu = [
      {
        label: 'My Idea',
        key: 'MyIdeas',
        link: `/MyProject/MyIdeas?id=${me?.data?.id}`,
      },
      {
        label: 'My Project',
        key: 'NewProjectChildren',
        link: `/MyProject/MyProjectChildren?id=${me?.data?.id}`,
      },
      {
        label: 'Followed Idea/Project',
        key: 'FollowIdeaProject',
        link: `/MyProject/FollowIdeaProject?id=${me?.data?.id}`,
      },
      {
        label: 'Joined Project',
        key: 'JoinedProject',
        link: `/MyProject/JoinedProject?id=${me?.data?.id}`,
      },
    ];

    return (
      <Menu defaultSelectedKeys={[href]} mode="inline">
        {menu.map((item, i) => (
          <Menu.Item key={item.key}>
            {item.label}
            <Link to={`${item.link}`} />
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  return (
    <MasterLayout>
      <section className="flex space-x-4 bg-[#F6F9FB] w-full">
        <div className="w-[15%] p-3">
          <h3 className="text-[#0369A1] text-[24px]">My Idea/Project</h3>
          <div>{renderMenu()}</div>
        </div>
        <div className="w-[85%]">{children}</div>
      </section>
    </MasterLayout>
  );
};
