import PropTypes from 'prop-types';
import './style.css';

function Modal({ isOpen, onClose, descricao, onVote }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Descrição</h2>
        <p>{descricao}</p>
        <button onClick={onVote}>Saiba mais</button>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
  onVote: PropTypes.func.isRequired,
};

export default Modal;