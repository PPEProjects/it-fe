import React from 'react';
import { Tabs } from 'components/Tabs';
import { Ideas } from './Ideas';
import { Project } from './Project';

const menuList = [
  {
    title: 'Draft Ideas',
  },
  {
    title: 'Draft Project',
  },
];

const tabPane = [
  {
    content: <Ideas />,
  },
  {
    content: <Project />,
  },
];
export const DraftIdeasProject = () => {
  return (
    <div>
      <Tabs
        TabsNameClassName="pl-14"
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
