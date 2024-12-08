import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bills from './pages/Bills/Bills';
import News from './pages/News/News';

const MaindRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projetos-de-lei' element={<Bills />}/>
            <Route path='/noticias' element={<News />}/>
        </Routes>
    )
}

export default MaindRoutes;