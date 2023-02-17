import React from 'react';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test', () => {
  const app = (
    <Router>
      <App />
    </Router>
  );
  it('test 1', () => {
    render(app);
    expect(screen.queryByText(/apps by host/i)).toBeInTheDocument();
  });
});
