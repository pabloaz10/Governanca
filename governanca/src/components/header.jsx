//crie um header parecido com de um app smartphone

import './styles.css';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaBell } from 'react-icons/fa';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src="logo.png" alt="Logo" />
                </Link>
                
                <div className="header__menu">
                    <div className="header__bars">
                        <FaBars />
    
                        <div className="header__menu-items">
                            <Link to="/home">Home</Link>
                            <Link to="/about">Sobre</Link>
                            <Link to="/contact">Contato</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/faq">FAQ</Link>

                </div>
            </div>
            
            <div className="header__search">
                <input type="text" placeholder="Buscar..." />
                <FaSearch />
            </div>
            
            <div className="header__notification">
                <FaBell />
                <span>3</span>
            </div>
        </div>
    </div>
</header>
    )
}

export default Header;