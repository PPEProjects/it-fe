import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { Tabs } from 'components/Tabs';
import { IdeasProjectAdmin } from 'admin/AdminIstrator/IdeasProjectAdmin';

const menuList = [
  {
    title: 'All',
  },
  {
    title: 'MemberAdmin',
  },
];

const tabPane = [
  {
    content: <IdeasProjectAdmin />,
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
