import PropTypes from 'prop-types';
import './style.css';

function VoteCounter({ votes }) {
  return (
    <div className="vote-counter">
      <h3>Quantidade de Votos: {votes}</h3>
    </div>
  );
}

VoteCounter.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default VoteCounter;