import './styles.css';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/header/header';
import Carousel from '../../components/carousel/Carousel';
import BillItem from '../../components/billItem/BillItem';
import { useEffect, useState } from 'react';
import fetchData from '../../services/api';
import governancaData from '../../data/governanca.json';
import segurancaData from '../../data/seguranca.json';
import mobilidadeUrbanaData from '../../data/mobilidade-urbana.json';
import meioAmbienteData from '../../data/meio-ambiente.json';

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setNews(result);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!news || news.length === 0) {
    return <p>Nenhuma notícia disponível.</p>;
  }

  const getFirstItem = (data) => data.length > 0 ? data[0] : null;

  return (
    <>
      <Header title="Inicio" />
      <div className="home-container">
        <section className="carousel-section">
          <h2>Últimas Notícias</h2>
          <Carousel news={news} />
        </section>
        <section className="bills-section">
          <h2 className='title'>Projetos de Lei</h2>
          <div className="bills-container">
            {getFirstItem(governancaData) && (
              <BillItem {...getFirstItem(governancaData)} />
            )}
            {getFirstItem(segurancaData) && (
              <BillItem {...getFirstItem(segurancaData)} />
            )}
            {getFirstItem(mobilidadeUrbanaData) && (
              <BillItem {...getFirstItem(mobilidadeUrbanaData)} />
            )}
            {getFirstItem(meioAmbienteData) && (
              <BillItem {...getFirstItem(meioAmbienteData)} />
            )}
          </div>
        </section>
      </div>
      <Menu />
    </>
  );
}

export default Home;