import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { withProviders } from './providers/with-providers';
import { App } from '../app/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export const Routing = withProviders(() => (
  <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
));
