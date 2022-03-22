import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { Tabs } from 'components/Tabs';
import { IdeasProjectAdmin } from 'admin/AdminIstrator/IdeasProjectAdmin';
import { MemberAdmin } from 'admin/AdminIstrator/MemberAdmin';

const menuList = [
  {
    title: 'Idea/Project',
  },
  {
    title: 'Member',
  },
];

const tabPane = [
  {
    content: <IdeasProjectAdmin />,
  },
  {
    content: <MemberAdmin />,
  },
];

const Administrator = () => {
  return (
    <MasterLayout>
      <LayoutAdmin>
        <Tabs
          colorBg
          isSmallWidth
          hasArrayContent
          justifyBetween
          listTab={menuList}
          tabPane={tabPane}
          borderTop={false}
        />
      </LayoutAdmin>
    </MasterLayout>
  );
};

export default Administrator;
