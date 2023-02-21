import React from 'react';

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

function ErrorBoundary(props: React.PropsWithChildren<ErrorBoundaryProps>) {
  const { fallback, children } = props;
  const [state, setState] = React.useState<ErrorBoundaryState>({
    hasError: false,
  });

  function handleErrors(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
    setState({ hasError: true });
  }

  if (state.hasError) {
    return fallback;
  }

  return children;
}

export default ErrorBoundary;
