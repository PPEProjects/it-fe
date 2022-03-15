import React from 'react';

const MyProfile = React.lazy(() => import('./MyProfile'));
const NewProfile = React.lazy(() => import('./SettingUser/NewProfile'));
const Account = React.lazy(() => import('./SettingUser/Account'));
const MyProject = React.lazy(() => import('./MyProject'));
const MyIdeas = React.lazy(() => import('./MyProject/MyIdeas'));
const MyProjectChildren = React.lazy(() => import('./MyProject/MyProjectChildren'));
const FollowIdeaProject = React.lazy(() => import('./MyProject/FollowIdeaProject'));
const JoinedProject = React.lazy(() => import('./MyProject/JoinedProject'));

export const userRoutes = [
  { path: '/MyProfile', element: <MyProfile />, exact: true },
  { path: '/NewProfile', element: <NewProfile />, exact: true },
  { path: '/Account', element: <Account />, exact: true },
  { path: '/MyProject', element: <MyProject />, exact: true },
  { path: '/MyProject/MyIdeas', element: <MyIdeas />, exact: true },
  { path: '/MyProject/MyProjectChildren', element: <MyProjectChildren />, exact: true },
  { path: '/MyProject/FollowIdeaProject', element: <FollowIdeaProject />, exact: true },
  { path: '/MyProject/JoinedProject', element: <JoinedProject />, exact: true },
];
