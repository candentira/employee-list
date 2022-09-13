import PropTypes from 'prop-types';
import { SEARCH_INPUT_PLACEHOLDER } from '../../messages/lang';
import { debounce } from '../../utils';

function Search({ onChange }) {
  const handleChange = debounce((e) => onChange(e.target.value), 100);
  return <div><input type="text" onChange={handleChange} placeholder={SEARCH_INPUT_PLACEHOLDER} /></div>;
}

export default Search;
Search.propTypes = {
  onChange: PropTypes.func,
};

Search.defaultProps = {
  onChange: () => {},
};
