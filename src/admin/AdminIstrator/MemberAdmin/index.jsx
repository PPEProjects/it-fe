import React from 'react';
import { Tabs } from 'components/Tabs';
import { AllMember } from './AllMember';

const menuList = [
  {
    title: 'All',
  },
  {
    title: 'Admin',
  },
  {
    title: 'Idea Reviewer',
  },
  {
    title: 'Project Reviewer',
  },
  {
    title: 'Project Manager',
  },
  {
    title: 'Default Member',
  },
  //   ,
  //   {
  //     title: 'Done',
  //   },
  //   {
  //     title: 'InUse',
  //   },
];

const tabPane = [
  {
    content: <AllMember />,
  },
];
export const MemberAdmin = () => {
  return (
    <div>
      <Tabs colorBorder listTab={menuList} tabPane={tabPane} borderTop={false} />
    </div>
  );
};
