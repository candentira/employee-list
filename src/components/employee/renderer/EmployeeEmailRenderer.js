import PropTypes from 'prop-types';
import { EMAIL } from '../../../messages/lang';

export default function EmployeeEmailRenderer({ employee }) {
  const { firstName, lastName, email } = employee;
  return (
    <>
      <span>
        {firstName}
        {' '}
        {lastName}
      </span>
      {' '}
      {EMAIL}
      :
      {' '}
      <span>{email}</span>
    </>
  );
}

EmployeeEmailRenderer.propTypes = {
  employee: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
