import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Layout } from '@/components/layout';
import Home from '@/pages/Home';
import Details from '@/pages/Details';
import Error from '@/pages/Error';


const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/details',
            element: <Details />
        },
        {
            path: '*',
            element: <Error />
        },
    ]
}]
)

export const AppRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}