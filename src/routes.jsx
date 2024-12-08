import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bills from './pages/Bills/Bills';
import News from './pages/News/News';
import Vote from './pages/Vote/vote';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projetos-de-lei' element={<Bills />} />
      <Route path='/noticias' element={<News />} />
      <Route path='/votar' element={<Vote />} />
    </Routes>
  );
}

export default MainRoutes;