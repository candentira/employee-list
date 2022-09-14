import PropTypes from 'prop-types';
import { PHONE } from '../../../messages/lang';

export default function EmployeePhoneRenderer({ employee }) {
  const { firstName, lastName, tel: phone } = employee;
  return (
    <>
      <span>
        {firstName}
        {' '}
        {lastName}
      </span>
      {' '}
      {PHONE}
      :
      {' '}
      <span>{phone}</span>
    </>
  );
}

EmployeePhoneRenderer.propTypes = {
  employee: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    tel: PropTypes.string,
  }).isRequired,
};
