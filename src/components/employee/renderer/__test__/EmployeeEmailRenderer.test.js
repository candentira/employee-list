import { render, screen } from '@testing-library/react';
import EmployeeEmailRenderer from '../EmployeeEmailRenderer';

test('renders EmployeeEmailRenderer component', () => {
  const employee = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@domain.com',
    department: 'Finance',
    tel: '11111',
  };
  render(<EmployeeEmailRenderer employee={employee} />);
  const name = screen.getByText('John Doe');
  expect(name).toBeInTheDocument();
  const email = screen.getByText('john.doe@domain.com');
  expect(email).toBeInTheDocument();
  const tel = screen.queryByText('11111');
  expect(tel).toBeNull();
});
