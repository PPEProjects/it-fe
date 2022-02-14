import React from "react";
const AllPage = React.lazy(() => import("./index"));
const DonePage = React.lazy(() => import("./DonePage"));
const IdeasPage = React.lazy(() => import("./IdeasPage"));
const OnBoardPage = React.lazy(() => import("./OnBoardPage"));
const RunningPage = React.lazy(() => import("./RunningPage"));

export const homeRoutes = [
  { path: "/", element: <AllPage />, exact: true },
  { path: "/DonePage", element: <DonePage />, exact: true },
  { path: "/IdeasPage", element: <IdeasPage />, exact: true },
  { path: "/OnBoardPage", element: <OnBoardPage />, exact: true },
  { path: "/RunningPage", element: <RunningPage />, exact: true },
];
