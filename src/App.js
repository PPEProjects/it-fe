import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import React from "react";
import "antd/dist/antd.css";
import { authRoutes } from "pages/auth/authRoutes";
import { homeRoutes } from "pages/home/homeRoutes";
import { userRoutes } from "pages/user/userRoutes";
import { researchRoutes } from "pages/research/researchRoutes";

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
            ].map((props, key) => (
              <Route key={key} {...props} />
            ))}
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
