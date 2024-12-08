import { useEffect, useState } from 'react';
import './styles.css';
import fetchData from '../../services/api';
import Card from '../../components/Card/Card';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/header/header';
function News() {
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

  return (
    <>
    <Header title="Notícias" />
      <Card news={news} />
      <Menu />
    </>
  );
}

export default News;
