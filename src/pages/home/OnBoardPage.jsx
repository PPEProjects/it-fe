import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { MenuPage } from './MenuPage';
import { ComponentMyProject } from './ComponentMyProject';

const OnBoardPage = () => {
  return (
    <MasterLayout>
      <section className="w-full">
        <MenuPage />
        <ComponentMyProject status="onboard" containerClassName="px-10 py-3" />
      </section>
    </MasterLayout>
  );
};
export default OnBoardPage;
