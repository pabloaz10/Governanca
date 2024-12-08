import './styles.css'
import home from '../../../public/home.svg'

import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu-container'>
            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3083DC"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" /></svg>
            </Link>
            <Link to="/noticias">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3083DC"><path d="M140-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h680q24 0 42 18t18 42v600q0 24-18 42t-42 18H140Zm0-60h680v-600H140v600Zm109-106h462v-60H249v60Zm0-166h155v-222H249v222Zm259 0h203v-60H508v60Zm0-162h203v-60H508v60ZM140-180v-600 600Z" /></svg>
            </Link>
            <Link to="/projetos-de-lei">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3083DC"><path d="M160-120v-60h480v60H160Zm222-212L160-554l70-72 224 222-72 72Zm254-254L414-810l72-70 222 222-72 72Zm202 426L302-696l42-42 536 536-42 42Z" /></svg>
            </Link>
        </div>
    )
}

export default Menu;