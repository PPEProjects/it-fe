import React from "react";
const MyProfile = React.lazy(() => import("./MyProfile"));
const NewProfile = React.lazy(() => import("./SettingUser/NewProfile"));
const Account = React.lazy(() => import("./SettingUser/Account"));

export const userRoutes = [
  { path: "/MyProfile", element: <MyProfile />, exact: true },
  { path: "/NewProfile", element: <NewProfile />, exact: true },
  { path: "/Account", element: <Account />, exact: true },
];
