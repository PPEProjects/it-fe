import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { authRoutes } from 'pages/auth/authRoutes';
import { homeRoutes } from 'pages/home/homeRoutes';
import { userRoutes } from 'pages/user/userRoutes';
import { researchRoutes } from 'pages/research/researchRoutes';
import { projectRoutes } from 'pages/project/projectRoutes';
import { adminIstratorRoutes } from 'admin/AdminIstrator/adminIstratorRoutes';
import { projectManagerRoutes } from 'admin/ProjectManager/projectManagerRoutes';

function App() {

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
            <Route exact path={`/`} element={<Navigate to="/AllPage" />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
