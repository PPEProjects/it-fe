import React from 'react';
import { Tabs } from 'components/Tabs';
import Administrator from 'admin/AdminIstrator/AllAdmin';

const menuList = [
  {
    title: 'All',
  },
  {
    title: 'MemberAdmin',
  },
  {
    title: 'Ideas',
  },
  {
    title: 'OnBoard',
  },
  {
    title: 'Running',
  },
  {
    title: 'Stuck',
  },
  {
    title: 'Done',
  },
  {
    title: 'InUse',
  },
];

const tabPane = [
  {
    content: '<Administrator />',
  },
];

const MenuAdmin = () => {
  return (
    <div>
      <Tabs
        colorBorder
        isSmallWidth
        hasArrayContent
        justifyBetween
        listTab={menuList}
        tabPane={tabPane}
        borderTop={false}
      />
    </div>
  );
};

export default MenuAdmin;
