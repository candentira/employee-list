import PropTypes from 'prop-types';
import Employee from '../employee/Employee';
import { EMPTY_EMPLOYEE_LIST } from '../../messages/lang';

export default function EmployeeList({ employees }) {
  return employees && employees.length ? (
    <div>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Employee employee={employee} />
          </li>
        ))}
      </ul>
    </div>
  ) : <div>{EMPTY_EMPLOYEE_LIST}</div>;
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
  })),
};

EmployeeList.defaultProps = {
  employees: [],
};
