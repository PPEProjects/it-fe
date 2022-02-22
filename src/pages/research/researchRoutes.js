import React from "react";
const FormResearchPage = React.lazy(() => import("./FormResearchPage"));

export const researchRoutes = [
  { path: "/FormResearchPage", element: <FormResearchPage />, exact: true },
];
