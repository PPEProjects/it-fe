import React from 'react';
import { Tabs } from 'components/Tabs';
import { AllMember } from './AllMember';

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
