import React from 'react';
import { ApplicationStateType, SET_APP_STATE } from './models';

export const initialState: ApplicationStateType = {
  theme: 'light',
};

const Context = React.createContext(
  initialState as ApplicationStateType & {
    dispatch: React.Dispatch<{
      type: string;
      payload: Partial<ApplicationStateType>;
    }>;
  }
);

export function useAppState() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error('Context must exist to call useAppState');
  }
  return context;
}

const reducer = (
  state: ApplicationStateType,
  action: { type: string; payload: Partial<ApplicationStateType> }
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_APP_STATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

interface AppStateProviderPropsType {
  children: React.ReactNode;
}

export function ApplicationStateProvider({
  children,
}: AppStateProviderPropsType) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(
    () => ({ ...state, dispatch }),
    [state, dispatch]
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
