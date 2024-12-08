import PropTypes from 'prop-types';
import './styles.css';

function LoginModal({ isOpen, onClose, onLogin }) {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    onLogin();
    alert('Login realizado com sucesso!');
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-actions">
            <button type="submit">Entrar</button>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
        <div className="modal-links">
          <a href="#">Registrar</a>
          <a href="#">Esqueceu a senha?</a>
        </div>
      </div>
    </div>
  );
}

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginModal;