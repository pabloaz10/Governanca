
import PropTypes from 'prop-types';

const ButtonStatus = ({ title, color }) => {
  return (
    <button style={{ backgroundColor: color }}>{title}</button>
  );
};

ButtonStatus.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default ButtonStatus;
