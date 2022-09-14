import { render, screen } from '@testing-library/react';
import Employee from '../Employee';

test('Employee component shows email if employee is from Finance department', () => {
  const employee = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@domain.com',
    department: 'Finance',
    tel: '11111',
  };
  render(<Employee employee={employee} />);
  const email = screen.getByText('john.doe@domain.com');
  expect(email).toBeInTheDocument();
});

test('Employee component shows tel if employee is from IT department', () => {
  const employee = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@domain.com',
    department: 'IT',
    tel: '11111',
  };
  render(<Employee employee={employee} />);
  const tel = screen.getByText('11111');
  expect(tel).toBeInTheDocument();
});
