import React from 'react';
import { Row, RowProps } from './Row';
import { render, screen, fireEvent } from '@testing-library/react';

describe('row', () => {
  global.alert = jest.fn();

  const cProps: RowProps = {
    releaseNumber: 7,
    children: 'I am a row',
  };

  const setup = (props: RowProps) => render(<Row {...props} />);

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
