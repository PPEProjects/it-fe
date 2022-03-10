import React from 'react';
const AdminIstrator = React.lazy(() => import('./index'));
const AllAdmin = React.lazy(() => import('./AllAdmin'));
const MemberAdmin = React.lazy(() => import('./MemberAdmin'));

export const adminIstratorRoutes = [
  { path: '/Administrator', element: <AdminIstrator />, exact: true },
  { path: '/AllAdmin', element: <AllAdmin />, exact: true },
  { path: '/MemberAdmin', element: <MemberAdmin />, exact: true },
];
