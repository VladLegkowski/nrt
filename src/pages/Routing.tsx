import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  applicationsByHostFn,
  mostSatisfyingAppsFn,
  getTopAppsByHostFn,
  addAppToHostsFn,
  removeAppFromHostsFn,
} from '../shared/applications/applicationFns';
import { AppsByHost } from './apps-by-host/AppsByHost';
import { withProviders } from './providers/with-providers';
import hostAppData from '../../public/host-app-data.json';

const applicationsByHost = applicationsByHostFn([
  {
    name: 'Small Fresh Pants - Kautzer - Boyer, and Sons',
    contributors: [
      'Edwin Reinger',
      'Ofelia Dickens',
      'Hilbert Cole',
      'Helen Kuphal',
      'Maurine McDermott Sr.',
    ],
    version: 7,
    apdex: 68,
    host: [
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz',
    ],
  },
  {
    name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
    contributors: [
      'Ramon Harris DDS',
      'Summer Dicki',
      'Triston Sipes',
      'Fae Lind',
      'Carole Emard',
    ],
    version: 6,
    apdex: 57,
    host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
  },
  {
    name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
    contributors: ['Miss Moises Walter', 'Caroline Murazik'],
    version: 2,
    apdex: 61,
    host: [
      'e7bf58af-f0be.dallas.biz',
      'b0b655c5-928a.nadia.biz',
      '95b346a0-17f4.abbigail.name',
    ],
  },
]);

const mostSatisfyingApps = mostSatisfyingAppsFn(applicationsByHost);

const getTopAppsByHost = getTopAppsByHostFn(
  '7e6272f7-098e.dakota.biz',
  applicationsByHost
);

const app = {
  name: 'Practical Wooden Gloves - Wunsch, Champlin and Reinger, LLC',
  contributors: ['Bella Price'],
  version: 1,
  apdex: 55,
  host: [
    '128406fc-0d3f.tiana.biz',
    'e0419f48-6a5a.craig.info',
    'b0b655c5-928a.nadia.biz',
    'e7bf58af-f0be.dallas.biz',
  ],
};

// console.log(
//   removeAppFromHostsFn('7e6272f7-098e.dakota.biz', applicationsByHost)
// );
console.log(applicationsByHost);

removeAppFromHostsFn('7e6272f7-098e.dakota.biz', applicationsByHost);

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
