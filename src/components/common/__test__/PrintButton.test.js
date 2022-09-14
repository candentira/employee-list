import { render, screen, fireEvent } from '@testing-library/react';
import PrintButton from '../PrintButton';

test('renders Print Button', () => {
  render(<PrintButton />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('Print Button should call onClick handler over each element in data', () => {
  const handleClick = jest.fn();
  const mockData = new Array(3).fill(() => {});
  render(<PrintButton onClick={handleClick} data={mockData} />);
  fireEvent.click(screen.getByText('Submit List'));
  expect(handleClick).toHaveBeenCalledTimes(3);
});

test('Print Button should call onClick handler only once when user clicks button multiple times without delay', () => {
  const handleClick = jest.fn();
  render(<PrintButton onClick={handleClick} data={[{}]} />);
  const button = screen.getByText('Submit List');
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
