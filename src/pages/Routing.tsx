import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  applicationsByHostFn,
  mostSatisfyingAppsFn,
} from '../shared/applications/applicationFns';
import { AppsByHost } from './apps-by-host/AppsByHost';
import { withProviders } from './providers/with-providers';
import hostAppData from '../../public/host-app-data.json';

const applicationsByHost = applicationsByHostFn(hostAppData);
const mostSatisfyingApps = mostSatisfyingAppsFn(applicationsByHost);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppsByHost hostAppData={{ applicationsByHost, mostSatisfyingApps }} />
    ),
  },
  // ... other routes React.lazy(factory)
]);

export const Routing = withProviders(() => (
  <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
));
