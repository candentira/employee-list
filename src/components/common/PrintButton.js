import PropTypes from 'prop-types';
import { PRINT_LIST } from '../../messages/lang';

export default function PrintButton({ data, onClick }) {
  const handleClick = () => data.forEach(onClick);
  return <button type="button" onClick={handleClick}>{PRINT_LIST}</button>;
}

PrintButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  onClick: PropTypes.func,
};

PrintButton.defaultProps = {
  data: [],
  onClick: () => {},
};
