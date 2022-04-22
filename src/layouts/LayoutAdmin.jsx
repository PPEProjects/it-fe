import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { userSelector } from 'pages/user/userSlice';
import { useSelector } from 'react-redux';

export const LayoutAdmin = ({ children }) => {
  let href = window.location.href.replace(/^.+?\/(\w+)$/gim, '$1');
  const { me } = useSelector(userSelector);
  const rolesAdmin = { admin: 'admin' };

  const renderMenu = () => {
    const menu = [
      {
        label: 'admin',
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
          <>
            {item?.label === 'admin' ? (
              <>
                {me?.data?.userAdvance?.roles?.includes(rolesAdmin?.admin) ? (
                  <Menu.Item
                    className="hover:!text-[#0369A1] capitalize hover:!bg-[#F6F9FB] hover:!rounded-lg"
                    key={item.key}
                  >
                    {item.label}
                    <Link to={`${item.link}`} />
                  </Menu.Item>
                ) : (
                  <Menu.Item className="capitalize" disabled key={item.key}>
                    {item.label}
                    <Link to={`${item.link}`} />
                  </Menu.Item>
                )}
              </>
            ) : (
              <>
                {!me?.data?.userAdvance?.roles?.includes(rolesAdmin?.admin) && (
                  <Menu.Item
                    className="hover:!text-[#0369A1] capitalize hover:!bg-[#F6F9FB] hover:!rounded-lg"
                    key={item.key}
                  >
                    {item.label}
                    <Link to={`${item.link}`} />
                  </Menu.Item>
                )}
              </>
            )}
          </>
        ))}
      </Menu>
    );
  };
  return (
    <section className="flex space-x-4 bg-[#F6F9FB] w-full min-h-screen">
      <div className="w-[25%] p-3 ml-3">
        <h3 className="text-[#0369A1] text-[24px] mt-2">Administrator</h3>
        <div className="!w-[96%]">{renderMenu()}</div>
      </div>
      <div className="w-[84%] !bg-[#FFFFFF] shadow-sm mt-3 rounded-md !mr-3">{children}</div>
    </section>
  );
};
