import React from 'react'
const LoginPage = React.lazy(() => import('./LoginPage'))
const RegisterPage = React.lazy(() => import('./RegisterPage'))

export const authRoutes = [
    { path: '/LoginPage', element: <LoginPage />, },
    { path: '/RegisterPage', element: <RegisterPage />, },
]