import PropTypes from 'prop-types';
import './styles.css';

function BillItem({ data, titulo, autoria, descricao, link, status, onClick }) {
  return (
    <div className="bill-item" onClick={onClick}>
      <h2>{titulo}</h2>
      <p><strong>Data:</strong> {data}</p>
      <p><strong>Autoria:</strong> {autoria}</p>
      <p><strong>Descrição:</strong> {descricao}</p>
      <p><strong>Status:</strong> {status}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">Mais informações</a>}
    </div>
  );
}

BillItem.propTypes = {
  data: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  autoria: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  link: PropTypes.string,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BillItem;