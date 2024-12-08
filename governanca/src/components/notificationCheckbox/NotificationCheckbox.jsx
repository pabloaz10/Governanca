import PropTypes from 'prop-types';
import './styles.css';

function NotificationCheckbox({ isChecked, onChange }) {
  return (
    <div className="notification-checkbox">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        Receber notificações sobre esta lei
      </label>
    </div>
  );
}

NotificationCheckbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NotificationCheckbox;