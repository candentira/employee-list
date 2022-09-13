import PropTypes from 'prop-types';
import { SEARCH_INPUT_PLACEHOLDER } from '../../messages/lang';

function Search({ onChange }) {
  const handleChange = (e) => onChange(e.target.value);
  return <div><input type="text" onChange={handleChange} placeholder={SEARCH_INPUT_PLACEHOLDER} /></div>;
}

export default Search;
Search.propTypes = {
  onChange: PropTypes.func,
};

Search.defaultProps = {
  onChange: () => {},
};
