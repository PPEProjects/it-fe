import React from 'react';
import { Tabs } from 'components/Tabs';
import { AllMember } from './AllMember';
import { Admin } from './Admin';
import { IdeaReviewer } from './IdeaReviewer';
import { ProjectReviewer } from './ProjectReviewer';
import { ProjectManager } from './ProjectManager';
import { DefaultMember } from './DefaultMember';

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
  {
    content: <Admin />,
  },
  {
    content: <IdeaReviewer />,
  },
  {
    content: <ProjectReviewer />,
  },
  {
    content: <ProjectManager />,
  },
  {
    content: <DefaultMember />,
  },
];
export const MemberAdmin = () => {
  return (
    <div>
      <Tabs colorBorder listTab={menuList} tabPane={tabPane} borderTop={false} />
    </div>
  );
};
