import { useEffect, useState } from 'react';
import './styles.css';
import fetchData from '../../services/api';  // A função fetchData vai buscar os dados
import Card from '../../components/Card/Card';  // Importando o componente Card
import Menu from '../../components/Menu/Menu';

function News() {
  const [news, setNews] = useState([]); // Estado para armazenar a lista de notícias
  const [loading, setLoading] = useState(true); // Estado para controlar o loading

  useEffect(() => {
    // Função para buscar os dados da API
    const getData = async () => {
      try {
        const result = await fetchData(); // Chama a função fetchData
        setNews(result); // Armazena a lista de notícias no estado
        setLoading(false); // Atualiza o estado de loading
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    };

    getData();
  }, []); // O array vazio garante que isso só seja chamado uma vez, no mount do componente

  if (loading) {
    return <p>Carregando...</p>; // Exibe um loading enquanto os dados não chegam
  }

  if (!news || news.length === 0) {
    return <p>Nenhuma notícia disponível.</p>; // Exibe caso não haja notícias
  }

  return (
    <>
      <Card news={news} />
      <Menu />
    </>
  );
}

export default News;
