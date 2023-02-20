import React from 'react';
import { ClickableRow, ClickableRowProps } from './ClickableRow';
import { render, screen, fireEvent } from '@testing-library/react';

describe('clickable-row', () => {
  global.alert = jest.fn();

  const cProps: ClickableRowProps = {
    releaseNumber: 7,
    children: 'I am a clickable-row',
  };

  const setup = (props: ClickableRowProps) =>
    render(<ClickableRow {...props} />);

  it('renders a child component', () => {
    setup(cProps);
    expect(screen.queryByText(/i am a row/i)).toBeInTheDocument();
  });

  it('triggers alert dialogue', () => {
    setup(cProps);
    const row = screen.getByRole('button');
    fireEvent.click(row);
    expect(global.alert).toHaveBeenNthCalledWith(1, 'Release number is 7');
  });
});
