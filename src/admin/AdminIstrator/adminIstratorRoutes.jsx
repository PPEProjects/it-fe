import React from 'react';
const AdminIstrator = React.lazy(() => import('./index'));

export const adminIstratorRoutes = [
  { path: '/Administrator', element: <AdminIstrator />, exact: true },
];
