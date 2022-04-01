import React from 'react';
import { MenuAdmin } from 'admin/AdminIstrator/MenuAdmin';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export const LayoutAdmin = ({ children, admin }) => {
  let href = window.location.href.replace(/^.+?\/(\w+)$/gim, '$1');

  const renderMenu = () => {
    const menu = [
      {
        label: 'Admin',
        key: 'AllAdmin',
        link: `/Administrator`,
      },
      {
        label: 'Idea Review',
        key: 'IdeaReview',
        link: `/IdeaReview`,
      },
      {
        label: 'Project Review',
        key: 'ProjectReview',
        link: `/ProjectReview`,
      },
      {
        label: 'Project Manager',
        key: 'ProjectManager',
        link: `/ProjectManager`,
      },
      {
        label: 'Customer Support',
        key: 'CustomerSupport',
        link: `/CustomerSupport`,
      },
      {
        label: 'Technical Support',
        key: 'TechnicalSupport',
        link: `/TechnicalSupport`,
      },
      {
        label: 'Coaching Support',
        key: 'CoachingSupport',
        link: `/CoachingSupport`,
      },
    ];
    return (
      <Menu defaultSelectedKeys={[href]} mode="inline" className="rounded-lg font-medium text-base">
        {menu.map((item, i) => (
          <Menu.Item
            className="hover:!text-[#0369A1] hover:!bg-[#F6F9FB] hover:!rounded-lg"
            key={item.key}
          >
            {item.label}
            <Link to={`${item.link}`} />
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  return (
    <section className="flex space-x-4 bg-[#F6F9FB] w-full ">
      <div className="w-[25%] p-3 ml-3">
        <h3 className="text-[#0369A1] text-[24px] mt-2">Administrator</h3>
        <div className="!w-[96%]">{renderMenu()}</div>
      </div>
      <div className="w-[84%] !bg-[#FFFFFF] shadow-sm mt-3 rounded-md !mr-3">{children}</div>
    </section>
  );
};
