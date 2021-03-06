import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export const MenuPage = () => {
  let href = window.location.href.replace(/^.+?\/(\w+)$/gim, '$1');

  const renderMenu = () => {
    const menu = [
      {
        label: 'All',
        key: 'AllPage',
        link: '/AllPage',
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
      <Menu defaultSelectedKeys={[href]} mode="horizontal" className="!bg-[#F6F9FB]">
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
