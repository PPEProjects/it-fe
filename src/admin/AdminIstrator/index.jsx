import React from 'react';
import MasterLayout from 'layouts/MasterLayout';
import { LayoutAdmin } from 'layouts/LayoutAdmin';
import { MenuAdmin } from './MenuAdmin';

const Administrator = () => {
  return (
    <MasterLayout>
      <LayoutAdmin>{/* <MenuAdmin /> */}</LayoutAdmin>
    </MasterLayout>
  );
};

export default Administrator;
