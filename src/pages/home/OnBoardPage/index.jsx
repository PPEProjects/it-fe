import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { MenuPage } from '../MenuPage';

import { Board } from './Board';

const OnBoardPage = () => {
  return (
    <MasterLayout>
      <section className="w-full">
        <MenuPage />
        <Board containerClassName="px-10 py-3" />
      </section>
    </MasterLayout>
  );
};
export default OnBoardPage;
