import './styles.css'
import Header from '../../components/header/header';
import BillItem from '../../components/BillItem/BillItem';
import Modal from '../../components/modalLei/Modal';
import governancaData from '../../data/governanca.json';
import segurancaData from '../../data/seguranca.json';
import mobilidadeUrbanaData from '../../data/mobilidade-urbana.json';
import meioAmbienteData from '../../data/meio-ambiente.json';
import { useState } from 'react';
import Menu from '../../components/Menu/Menu';
import { useNavigate } from 'react-router-dom';

function Bills() {
  const [selectedTag, setSelectedTag] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const navigate = useNavigate();

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleBillClick = (bill) => {
    setSelectedBill(bill);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBill(null);
  };

  const handleVote = () => {
    navigate('/votar', { state: selectedBill });
  };

  const getFilteredData = () => {
    switch (selectedTag) {
      case 'governanca':
        return governancaData;
      case 'seguranca':
        return segurancaData;
      case 'mobilidade-urbana':
        return mobilidadeUrbanaData;
      case 'meio-ambiente':
        return meioAmbienteData;
      default:
        return [...governancaData, ...segurancaData, ...mobilidadeUrbanaData, ...meioAmbienteData];
    }
  };

  const filteredData = getFilteredData();

  return (
    <>
      <Header title="Projetos de Leis" />
      <div className="bills-container">
        <div className="tag-buttons">
          <button onClick={() => handleTagClick('all')}>Todos</button>
          <button onClick={() => handleTagClick('governanca')}>Governança</button>
          <button onClick={() => handleTagClick('seguranca')}>Segurança</button>
          <button onClick={() => handleTagClick('mobilidade-urbana')}>Mobilidade Urbana</button>
          <button onClick={() => handleTagClick('meio-ambiente')}>Meio Ambiente</button>
        </div>
        {filteredData.map((bill, index) => (
          <BillItem
            key={index}
            data={bill.data}
            titulo={bill.titulo}
            autoria={bill.autoria}
            descricao={bill.descricao}
            link={bill.link}
            status={bill.status}
            onClick={() => handleBillClick(bill)}
          />
        ))}
      </div>
      <Menu />
      {selectedBill && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          descricao={selectedBill.descricao}
          onVote={handleVote}
        />
      )}
    </>
  );
}

export default Bills;