import PropTypes from 'prop-types';
import Employee from '../employee/Employee';

export default function EmployeeList({ employees }) {
  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          <Employee data={employee} />
        </li>
      ))}
    </ul>
  );
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
  })),
};

EmployeeList.defaultProps = {
  employees: [],
};
