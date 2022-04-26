import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { MenuPage } from './MenuPage';
import { ComponentMyProject } from './ComponentMyProject';

const DonePage = () => {
  return (
    <MasterLayout>
      <section>
        <MenuPage />
        <ComponentMyProject status="done" containerClassName="px-10 py-3" />
      </section>
    </MasterLayout>
  );
};
export default DonePage;
