import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { appsInfoFn } from '../shared/applications/mostSatisfyingApplications';
import { AppsByHost } from './apps-by-host/AppsByHost';
import { withProviders } from './providers/with-providers';
import hostAppData from '../../public/host-app-data.json';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppsByHost hostAppData={appsInfoFn(hostAppData)} />,
  },
  // ... other routes
]);

export const Routing = withProviders(() => (
  <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
));
