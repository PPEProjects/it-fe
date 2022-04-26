import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { MenuPage } from '../MenuPage';
import { Ideas } from './Ideas';

const IdeasPage = () => {
  return (
    <MasterLayout>
      <section>
        <MenuPage />
        <Ideas containerClassName="px-10 py-3" />
      </section>
    </MasterLayout>
  );
};
export default IdeasPage;
