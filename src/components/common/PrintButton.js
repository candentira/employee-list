import PropTypes from 'prop-types';
import { PRINT_LIST } from '../../messages/lang';
import { throttle } from '../../utils';

export default function PrintButton({ data, onClick }) {
  const handleClick = throttle(() => data.forEach(onClick), 1000);
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
