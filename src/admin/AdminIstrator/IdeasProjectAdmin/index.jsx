import React from 'react';
import { Tabs } from 'components/Tabs';
import { AllIdeasProject } from './AllIdeasProject';

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
    content: <AllIdeasProject />,
  },
];
export const IdeasProjectAdmin = () => {
  return (
    <div>
      <Tabs colorBorder listTab={menuList} tabPane={tabPane} borderTop={false} />
    </div>
  );
};
