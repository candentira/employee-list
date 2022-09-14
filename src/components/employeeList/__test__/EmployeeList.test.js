import { render, screen } from '@testing-library/react';
import EmployeeList from '../EmployeeList';

test('EmployeeList renders empty list message if no employees provided', () => {
  render(<EmployeeList />);
  const emptyListText = screen.getByText('No employees found');
  expect(emptyListText).toBeInTheDocument();
});

test('EmployeeList renders list of employees', () => {
  const mockEmployees = [
    {
      id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@domain.com', department: 'Finance', tel: '11111', isActive: 'Y',
    },
    {
      id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@domain.com', department: 'Finance', tel: '22222', isActive: 'Y',
    },
    {
      id: 3, firstName: 'Bob', lastName: 'Simpson', email: 'bob.simpson@domain.com', department: 'IT', tel: '33333', isActive: 'Y',
    }];
  render(<EmployeeList employees={mockEmployees} />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBe(3);
});
