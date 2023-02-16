import React from 'react';
import { createRoot } from 'react-dom/client';
import { Routing } from './pages/Routing';

const container = document.getElementById('app');
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
