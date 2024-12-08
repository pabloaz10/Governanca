import PropTypes from 'prop-types';

const ButtonStatus = () => {
  return (
    <button className=''>
    </button>
  );
};

ButtonStatus.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default ButtonStatus;