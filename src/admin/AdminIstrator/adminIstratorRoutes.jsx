import React from 'react';
const AdminIstrator = React.lazy(() => import('./index'));
const MenuAdmin = React.lazy(() => import('./MenuAdmin'));
const MemberAdmin = React.lazy(() => import('./MemberAdmin'));
const Ideas = React.lazy(() => import('./Ideas'));
const IdeaReview = React.lazy(() => import('./IdeaReview'));

export const adminIstratorRoutes = [
  { path: '/Administrator', element: <AdminIstrator />, exact: true },
  { path: '/AllAdmin', element: <MenuAdmin />, exact: true },
  { path: '/MemberAdmin', element: <MemberAdmin />, exact: true },
  { path: '/Admin/Ideas', element: <Ideas />, exact: true },
  { path: '/IdeaReview', element: <IdeaReview />, exact: true },
];
