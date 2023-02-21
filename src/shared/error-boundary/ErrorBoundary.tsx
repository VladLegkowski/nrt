import React from 'react';

type ErrorBoundaryProps = {
  fallback: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

function ErrorBoundary(
  props: React.PropsWithChildren<ErrorBoundaryProps>
): JSX.Element {
  const { fallback, children } = props;
  const [state, setState] = React.useState<ErrorBoundaryState>({
    hasError: false,
  });

  function handleErrors(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
    setState({ hasError: true });
  }

  if (state.hasError) {
    return <div id="fallback">{fallback}</div>;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export { ErrorBoundary };
