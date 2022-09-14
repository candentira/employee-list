import PropTypes from 'prop-types';
import EmployeeEmailRenderer from './renderer/EmployeeEmailRenderer';
import EmployeePhoneRenderer from './renderer/EmployeePhoneRenderer';
import EmployeeNoRenderer from './renderer/EmployeeNoRenderer';

const DEPARTMENTS = {
  FINANCE: 'Finance',
  IT: 'IT',
};

const EMMPLOYEE_RENDERER = {
  [DEPARTMENTS.FINANCE]: EmployeeEmailRenderer,
  [DEPARTMENTS.IT]: EmployeePhoneRenderer,
};

export default function Employee({ employee }) {
  const { department } = employee;
  const EmployeeRenderer = EMMPLOYEE_RENDERER[department] || EmployeeNoRenderer;
  return <EmployeeRenderer employee={employee} />;
}

Employee.propTypes = {
  employee: PropTypes.shape({
    department: PropTypes.string,
  }).isRequired,
};
