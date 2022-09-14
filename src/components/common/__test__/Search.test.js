import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import Search from '../Search';

test('renders Search input', () => {
  render(<Search />);
  const input = screen.getByPlaceholderText('Search employees');
  expect(input).toBeInTheDocument();
});

test('Search should call onClick handler when user types', async () => {
  const handleChange = jest.fn();
  render(<Search onChange={handleChange} />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'a' } });
  expect(input.value).toBe('a');
  await waitFor(() => {
    expect(handleChange).toHaveBeenCalledTimes(1);
  }, { timeout: 300 });
});
