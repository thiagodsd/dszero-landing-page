import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navigateAndLog from '../../utils/navigateAndLog';
import "../../assets/styles/Header.css";

function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }
    return (
        <div>
            <div className="header-container">
                <Link to="/">
                    <div className="logo">
                        <p className="char-delta">&#948;</p><p className="char-s">S</p> 
                    </div>
                </Link>
                <nav>
                    <div className={`hamburger ${isMenuVisible ? 'clicked' : ''}`} onClick={toggleMenu}>
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                    <ul className={`menu ${isMenuVisible ? 'visible' : ''}`}>
                        <li><button onClick={() => navigateAndLog('#about', 'header_about-item')}>Sobre</button></li>
                        <li><button onClick={() => navigateAndLog('#services', 'header_services-item')}>Serviços</button></li>
                        <li><button onClick={() => navigateAndLog('#portfolio', 'header_portfolio-item')}>Projetos</button></li>
                        <li><button onClick={() => navigateAndLog('#contact', 'header_contact-item')}>Contato</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
