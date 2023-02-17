import React from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { render, screen, fireEvent } from '@testing-library/react';

describe('checkbox', () => {
  const onChange = jest.fn();
  const cProps = {
    checked: false,
    onChange,
  };

  const setup = (props: CheckboxProps) => render(<Checkbox {...props} />);

  beforeEach(() => {
    onChange.mockReset();
  });

  it('checkbox is not checked', () => {
    setup({ ...cProps });
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('checkbox is checked', () => {
    setup({ ...cProps, checked: true });
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('checkbox dispatches action on click', () => {
    setup({ ...cProps });
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('checkbox renders optional child component', () => {
    setup({ ...cProps, children: 'I am a support text' });
    expect(screen.queryByText(/i am a support text/i)).toBeInTheDocument();
  });
});
