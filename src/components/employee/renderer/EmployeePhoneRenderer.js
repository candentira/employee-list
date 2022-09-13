import PropTypes from 'prop-types';
import { PHONE } from '../../../messages/lang';

export default function EmployeePhoneRenderer({ data: employee }) {
  const { firstName, lastName, tel: phone } = employee;
  return (
    <>
      <span>{firstName}</span>
      {' '}
      <span>{lastName}</span>
      {' '}
      {PHONE}
      :
      {' '}
      <span>{phone}</span>
    </>
  );
}

EmployeePhoneRenderer.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    tel: PropTypes.string,
  }).isRequired,
};
