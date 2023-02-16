import React, { Suspense } from 'react';
import compose from 'compose-function';
import { ApplicationStateProvider } from '../../app/context/Context';

const providers = (component: () => React.ReactNode) => () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplicationStateProvider>{component()}</ApplicationStateProvider>
    </Suspense>
  );
};
export const withProviders = compose(providers);
