import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import '@tienlucky/storage/src/tienlucky-storage.min.css';
import { authRoutes } from 'pages/auth/authRoutes';
import { homeRoutes } from 'pages/home/homeRoutes';
import { userRoutes } from 'pages/user/userRoutes';
import { researchRoutes } from 'pages/research/researchRoutes';
import { projectRoutes } from 'pages/project/projectRoutes';
import { adminIstratorRoutes } from 'admin/AdminIstrator/adminIstratorRoutes';
import { projectManagerRoutes } from 'admin/ProjectManager/projectManagerRoutes';
import {apolloBuilder, NotifyWrapper, ToastView} from "ppe-notify";
import { message } from 'antd';

function App() {

  const context = {
    avatar: '',
    user: {
      id: '1234324',
      avatar: '',
      specialID: '1',
      name: 'Nguyên'
    }
  }

  const apolloClient = apolloBuilder({
    httpLink: 'http://localhost:3000/graphql',
    wsLink: 'ws://localhost:3000/graphql',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTM4OWEyNWI1Mzg0OGQyZjdkNzJhOSIsImFwcElEIjoicHBlLW5vdGlmeSIsImlwQWRtaW4iOiI6OjEiLCJpYXQiOjE2NDk2NDIwMDksImV4cCI6MTY0OTkwMTIwOX0.EHyP8YDmseHrd8xxwas3TXiffny2VuDr8uV1UKGHsHY',
    onError: (message, extensions) => {
      console.log(message)
    }
  })

  const onToast = (_message) => {
    if(_message.error) {
      message.error(_message.message)
    } else {
      message.success(_message.message)
    }
  }

  return (
    <div className="App">
      <NotifyWrapper apollo={ apolloClient } context={ context }>
        <div>
          <ToastView onReceived={ onToast } />
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
      </NotifyWrapper>
    </div>
  );
}

export default App;
