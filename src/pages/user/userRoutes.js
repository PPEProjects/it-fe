import React from "react";
const MyProfile = React.lazy(() => import("./MyProfile"));

export const userRoutes = [
  { path: "/MyProfile", element: <MyProfile />, exact: true },
];
