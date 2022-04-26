import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { MenuPage } from './MenuPage';
import { ComponentMyProject } from './ComponentMyProject';

const RunningPage = () => {
  return (
    <MasterLayout>
      <section>
        <MenuPage />
        <ComponentMyProject status="running" containerClassName="px-10 py-3" />
      </section>
    </MasterLayout>
  );
};
export default RunningPage;
