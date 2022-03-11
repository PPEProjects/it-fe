import React from 'react';
const ProjectManager = React.lazy(() => import('./index'));

export const projectManagerRoutes = [
  { path: '/ProjectManager', element: <ProjectManager />, exact: true },
];
