import { render, screen } from '@testing-library/react';
import EmployeeNoRenderer from '../EmployeeNoRenderer';

test('renders EmployeeNoRenderer component', () => {
  render(<EmployeeNoRenderer />);
  const text = screen.getByText('Employee data error: Unsupported department');
  expect(text).toBeInTheDocument();
});
