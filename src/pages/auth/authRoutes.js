import React from "react";
const LoginPage = React.lazy(() => import("./LoginPage"));
const RegisterPage = React.lazy(() => import("./RegisterPage"));
const ForgotPassword = React.lazy(() => import("./ForgotPassword"));
const NewPassWord = React.lazy(() => import("./NewPassWord"));

export const authRoutes = [
  { path: "/LoginPage", element: <LoginPage /> },
  { path: "/RegisterPage", element: <RegisterPage /> },
  { path: "/ForgotPassword", element: <ForgotPassword /> },
  { path: "/NewPassWord", element: <NewPassWord /> },
];
