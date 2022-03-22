import React from 'react';
import { Tabs } from 'components/Tabs';
import { AllIdeasProject } from './AllIdeasProject';
import { DraftIdeasProject } from './DraftIdeasProject';
import { OnBoardIdeasProject } from './OnBoardIdeasProject';

const menuList = [
  {
    title: 'All',
  },
  {
    title: 'Draft',
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
  {
    content: <DraftIdeasProject />,
  },
  {
    content: <OnBoardIdeasProject />,
  },
];
export const IdeasProjectAdmin = () => {
  return (
    <div>
      <Tabs colorBorder listTab={menuList} tabPane={tabPane} borderTop={false} />
    </div>
  );
};
