import { memo } from 'react';
import PropTypes from 'prop-types';
const toneMap = {
  0: '👋',
  1: '👋🏻',
  2: '👋🏼',
  3: '👋🏽',
  4: '👋🏾',
  5: '👋🏿',
};

function Wave({ options, onClick }) {
  console.count('Wave render');
  return (
    <span onClick={onClick} className="text-5xl cursor-pointer select-none">
      {toneMap[options?.tone || 0]}
    </span>
  );
}

Wave.propTypes = {
  options: PropTypes.shape({
    tone: PropTypes.number,
  }),
  onClick: PropTypes.func,
};

export default memo(Wave);
