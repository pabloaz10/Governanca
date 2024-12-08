import './styles.css';
import Header from '../../components/header/header';
import Menu from '../../components/Menu/Menu';
import VoteCounter from '../../components/VoteCounter/VoteCounter';
import NotificationCheckbox from '../../components/notificationCheckbox/NotificationCheckbox';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Vote() {
  const location = useLocation();
  const navigate = useNavigate();
  const [votes, setVotes] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const randomVotes = Math.floor(Math.random() * (5000 - 20 + 1)) + 20;
    setVotes(randomVotes);
  }, []);

  const bill = location.state || {
    titulo: "PROJETO DE LEI N.º 187/2024",
    descricao: "Revoga a Lei Municipal nº 9.418, de 02 de abril de 2004, que desafetou a área de terras denominada Quadra 7, com 5.482,69m², no Conjunto Habitacional Santa Luzia, e autorizou a outorga da concessão de direito real de uso à Associação Núcleo Esperança – NES.",
    status: "Em tramitação - prazo: 18/12/2024"
  };

  const handleVote = () => {
    setVotes(votes + 1);
    alert('Voto registrado com sucesso!');
    navigate('/projetos-de-lei');
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Header title="Votação" />
      <div className="vote-container">
        <h2>{bill.titulo}</h2>
        <p><strong>Descrição:</strong> {bill.descricao}</p>
        <p><strong>Status:</strong> {bill.status}</p>
        <VoteCounter votes={votes} />
        <NotificationCheckbox isChecked={isChecked} onChange={handleCheckboxChange} />
        <button className="vote-button" onClick={handleVote}>Votar</button>
      </div>
      <Menu />
    </>
  );
}

export default Vote;