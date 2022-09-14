import { render, screen } from '@testing-library/react';
import EmployeePhoneRenderer from '../EmployeePhoneRenderer';

test('renders EmployeePhoneRenderer component', () => {
  const employee = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@domain.com',
    department: 'Finance',
    tel: '11111',
  };
  render(<EmployeePhoneRenderer employee={employee} />);
  const name = screen.getByText('John Doe');
  expect(name).toBeInTheDocument();
  const tel = screen.getByText('11111');
  expect(tel).toBeInTheDocument();
  const email = screen.queryByText('john.doe@domain.com');
  expect(email).toBeNull();
});
