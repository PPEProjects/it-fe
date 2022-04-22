import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { authRoutes } from 'pages/auth/authRoutes';
import { homeRoutes } from 'pages/home/homeRoutes';
import { userRoutes } from 'pages/user/userRoutes';
import { researchRoutes } from 'pages/research/researchRoutes';
import { projectRoutes } from 'pages/project/projectRoutes';
import { adminIstratorRoutes } from 'admin/AdminIstrator/adminIstratorRoutes';
import { projectManagerRoutes } from 'admin/ProjectManager/projectManagerRoutes';
import 'antd/dist/antd.css';

const App = () => {
  const [user, setUser] = useState(null);
  const rolesAdmin = { admin: 'admin' };
  const rolesProjectManage = { project_manage: 'project_manage' };
  const rolesIdeasReview = { ideas_review: 'ideas_review' };
  const rolesProjectReview = { project_review: 'project_review' };

  useEffect(() => {
    window.addEventListener('currentUser', e => {
      setUser(e.detail.data);
    });
  }, [user]);

  console.log('user?.userAdvance?.roles', user?.userAdvance?.roles);

  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {[
              ...authRoutes,
              ...homeRoutes,
              ...userRoutes,
              ...researchRoutes,
              ...projectRoutes,
              ...adminIstratorRoutes,
              ...projectManagerRoutes,
            ].map((props, key) => (
              <Route key={key} {...props} />
            ))}
            {user?.userAdvance?.roles?.includes(rolesAdmin?.admin) && (
              <Route path={`/admin`} element={<Navigate to="/Administrator" />} />
            )}
            {user?.userAdvance?.roles?.includes(rolesIdeasReview?.ideas_review) && (
              <Route path={`/IdeaReview`} />
            )}

            <Route path={`/`} element={<Navigate to="/AllPage" />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
