import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Masthead } from 'src/components';

describe('Masthead Component', () => {
  const onClick = jest.fn();

  it('renders a heading', () => {
    render(<Masthead />);
    const heading = screen.getByTestId('test-heading');
    expect(heading).toBeInTheDocument();
  });
});
