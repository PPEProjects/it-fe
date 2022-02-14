import React from 'react'
const HomePage = React.lazy(() => import('./HomePage'))

export const homeRoutes = [
    { path: '/', element: <HomePage/>, exact:true },
]