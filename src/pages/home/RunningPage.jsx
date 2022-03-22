import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { MenuPage } from './MenuPage';
import { NewComponents } from 'components/NewComponents';

const RunningPage = () => {
  return (
    <MasterLayout>
      <MenuPage />
      <div className="p-3 grid grid-cols-4 gap-4">
        <NewComponents />
      </div>
    </MasterLayout>
  );
};
export default RunningPage;
