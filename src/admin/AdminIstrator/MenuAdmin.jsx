import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
// import AllAdmin from 'admin/AdminIstrator/AllAdmin';

export const MenuAdmin = () => {
  let href = window.location.href.replace(/^.+?\/(\w+)$/gim, '$1');
  const renderMenu = () => {
    const menu = [
      {
        label: 'All',
        key: 'AllAdmin',
        link: '/AllAdmin',
      },
      {
        label: 'MemberAdmin',
        key: 'MemberAdmin',
        link: '/MemberAdmin',
      },
      {
        label: 'Ideas',
        key: 'IdeasPage',
        link: '/IdeasPage',
      },
      {
        label: 'OnBoard',
        key: 'OnBoardPage',
        link: '/OnBoardPage',
      },
      {
        label: 'Running',
        key: 'RunningPage',
        link: '/RunningPage',
      },
      {
        label: 'Stuck',
        key: 'StuckPage',
        link: '/StuckPage',
      },
      {
        label: 'Done',
        key: 'DonePage',
        link: '/DonePage',
      },
      {
        label: 'InUse',
        key: 'InUsePage',
        link: '/InUsePage',
      },
    ];

    return (
      <Menu defaultSelectedKeys={[href]} mode="horizontal">
        {menu.map((item, i) => (
          <Menu.Item className="!h-[54px] !w-[130px] text-center" key={item.key}>
            {item.label}
            {!(item.link.match(/AllPage/g) && window.location.href.match(/AllPage/g)) && (
              <Link to={`${item.link}`} />
            )}
          </Menu.Item>
        ))}
      </Menu>
    );
  };

  return <>{renderMenu()}</>;
};
