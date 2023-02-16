import React from 'react';
import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { ApplicationStateProvider, initialState, useAppState } from './Context';
import { SET_APP_STATE } from './models';

function MockComponent() {
  const { dispatch, theme } = useAppState();
  // dispatch({ type: SET_APP_STATE, payload: { theme: 'dark' } })
  return (
    <div>
      <p>{`The current theme is ${theme}`}</p>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: SET_APP_STATE, payload: { theme: 'dark' } })
        }
      >
        Change theme
      </button>
    </div>
  );
}

describe('App state context', () => {
  describe('useAppState hook', () => {
    it('initial context', () => {
      const { result } = renderHook(() => useAppState());
      expect(result.current).toEqual(initialState);
    });
    it('updated context', async () => {
      render(
        <ApplicationStateProvider>
          <MockComponent />
        </ApplicationStateProvider>
      );
      expect(
        screen.queryByText(/the current theme is light/i)
      ).toBeInTheDocument();
      fireEvent.click(screen.getByText(/change theme/i));
      expect(
        screen.queryByText(/the current theme is dark/i)
      ).toBeInTheDocument();
    });
  });
});
