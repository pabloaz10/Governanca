import './styles.css';
import Header from '../../components/header/header';
import Menu from '../../components/Menu/Menu';
import VoteCounter from '../../components/VoteCounter/VoteCounter';
import NotificationCheckbox from '../../components/NotificationCheckbox/NotificationCheckbox';
import LoginModal from '../../components/loginModal/LoginModal';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Vote() {
  const location = useLocation();
  const navigate = useNavigate();
  const [votes, setVotes] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar se o usuário está logado
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Estado para controlar a exibição do modal de login
  const [loginCooldown, setLoginCooldown] = useState(false); // Estado para controlar o cronômetro

  useEffect(() => {
    const randomVotes = Math.floor(Math.random() * (5000 - 20 + 1)) + 20;
    setVotes(randomVotes);

    // Verificar se há login e senha salvos no localStorage
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username && password) {
      setIsLoggedIn(true);
    }
  }, []);

  const bill = location.state || {
    titulo: "PROJETO DE LEI N.º 187/2024",
    descricao: "Revoga a Lei Municipal nº 9.418, de 02 de abril de 2004, que desafetou a área de terras denominada Quadra 7, com 5.482,69m², no Conjunto Habitacional Santa Luzia, e autorizou a outorga da concessão de direito real de uso à Associação Núcleo Esperança – NES.",
    status: "Em tramitação - prazo: 18/12/2024",
    link: "https://example.com/projeto-de-lei-187-2024" // Adicione o link do projeto
  };

  const handleVote = () => {
    if (!isLoggedIn && !loginCooldown) {
      setIsLoginModalOpen(true);
      return;
    }
    setVotes(votes + 1);
    alert('Voto registrado com sucesso!');
    navigate('/projetos-de-lei');
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    window.open(bill.link, '_blank');
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    setLoginCooldown(true);
    setTimeout(() => {
      setLoginCooldown(false);
    }, 6 * 60 * 1000); // 6 minutos em milissegundos
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
        <div className="acoes">
          <div className="button-group">
            <button className="action-button" onClick={handleButtonClick}>Pasta Digital</button>
            <button className="action-button" onClick={handleButtonClick}>Imprimir DOC</button>
            <button className="action-button" onClick={handleButtonClick}>Imprimir PDF</button>
          </div>
          <button className="vote-button" onClick={handleVote}>Votar</button>
        </div>
      </div>
      <Menu />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} onLogin={handleLogin} />
    </>
  );
}

export default Vote;