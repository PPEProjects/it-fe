import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { MenuPage } from './MenuPage';

const DonePage = () => {
  return (
    <MasterLayout>
      <section>
        <MenuPage />
        DonePage
      </section>
    </MasterLayout>
  );
};
export default DonePage;
