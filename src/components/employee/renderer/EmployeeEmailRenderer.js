import PropTypes from 'prop-types';
import { EMAIL } from '../../../messages/lang';

export default function EmployeeEmailRenderer({ data: employee }) {
  const { firstName, lastName, email } = employee;
  return (
    <>
      <span>{firstName}</span>
      {' '}
      <span>{lastName}</span>
      {' '}
      {EMAIL}
      :
      {' '}
      <span>{email}</span>
    </>
  );
}

EmployeeEmailRenderer.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
