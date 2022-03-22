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
        link: `/AllAdmin`,
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
    <section className="p-3 flex space-x-4">
      <div className="w-[15%] border rounded">{renderMenu()}</div>
      <div className="w-[85%] border rounded space-y-4">
        {/* {admin && <MenuAdmin />} */}
        <div>{children}</div>
      </div>
    </section>
  );
};
