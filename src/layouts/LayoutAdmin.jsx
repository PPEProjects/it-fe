import React from 'react';
import { MenuAdmin } from 'admin/AdminIstrator/MenuAdmin';

export const LayoutAdmin = ({ children }) => {
  return (
    <section className="p-3 flex items-center space-x-4">
      <div className="w-[15%] border rounded">1</div>
      <div className="w-[85%] border rounded space-y-4">
        <MenuAdmin />
        <div>{children}</div>
      </div>
    </section>
  );
};
