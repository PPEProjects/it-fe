import React from 'react';
import { Tabs } from 'components/Tabs';
import { AllIdeasProject } from './AllIdeasProject';
import { DraftIdeasProject } from './DraftIdeasProject';
import { OnBoardIdeasProject } from './OnBoardIdeasProject';
import { RunningIdeasProject } from './RunningIdeasProject';
import { StuckIdeasProject } from './StuckIdeasProject';
import { DoneIdeasProject } from './DoneIdeasProject';
import { InUseIdeasProject } from './InUseIdeasProject';
import { IdeasApprove } from './IdeasApprove';

const menuList = [
  // {
  //   title: 'All',
  // },

  {
    title: 'Draft',
  },
  {
    title: 'Ideas',
  },
  {
    title: 'PM Preparing',
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
  // {
  //   content: <AllIdeasProject />,
  // },
  {
    content: <DraftIdeasProject />,
  },
  // datvnt
  {
    content: <IdeasApprove />,
  },
  {
    content: <OnBoardIdeasProject />,
  },
  // datvnt
  {
    content: <OnBoardIdeasProject />,
  },
  {
    content: <RunningIdeasProject />,
  },
  {
    content: <StuckIdeasProject />,
  },
  {
    content: <DoneIdeasProject />,
  },
  {
    content: <InUseIdeasProject />,
  },
];
export const IdeasProjectAdmin = () => {
  return (
    <div>
      <Tabs colorBorder listTab={menuList} tabPane={tabPane} borderTop={false} />
    </div>
  );
};
