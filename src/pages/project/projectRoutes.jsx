import React from "react";
const ProjectDescription = React.lazy(() => import("./ProjectDescription"));

export const projectRoutes = [
  { path: "/ProjectDescription", element: <ProjectDescription />, exact: true },
];
