import React from "react";
const MyProfile = React.lazy(() => import("./MyProfile"));
const NewProfile = React.lazy(() => import("./NewProfile"));

export const userRoutes = [
  { path: "/MyProfile", element: <MyProfile />, exact: true },
  { path: "/NewProfile", element: <NewProfile />, exact: true },
];
