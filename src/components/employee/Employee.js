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

export default function Employee({ data: employee }) {
  const { department } = employee;
  const EmployeeRenderer = EMMPLOYEE_RENDERER[department] || EmployeeNoRenderer;
  return <EmployeeRenderer data={employee} />;
}

Employee.propTypes = {
  data: PropTypes.shape({
    department: PropTypes.string,
  }).isRequired,
};
