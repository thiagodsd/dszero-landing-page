import React from "react";
import navigateAndLog from '../../utils/navigateAndLog';
import "../../assets/styles/HeroSection.css";

import img_hero_01 from "../../assets/images/hero_logo_01.png";
import img_hero_02 from "../../assets/images/hero_logo_02.png";
import img_hero_03 from "../../assets/images/hero_logo_03.png";

function HeroSection() {
    return (
        <div>
            <div className="hero-container">
                <div className="hero-section-left">
                    <h1>Reduza Desordem<br/>Minimize Esforços<br/>Atinja Objetivos</h1>
                    <h2>Desbloqueie todo o potencial que os seus dados possuem</h2>
                    <h3>Garimpamos resultados nos seus dados através de soluções estruturadas por  técnicas e ferramentas de ciência de dados, aprendizagem de máquina e desenvolvimento de software.</h3>
                    <div className="hero-buttons">
                        <button className="atendimento-button" onClick={() => navigateAndLog('https://dszero.setmore.com', 'hero_contact-button')}>
                            Agendar Conversa
                        </button>
                        <button className="saiba-mais" onClick={() => navigateAndLog('#', 'hero_know-more-button')}>
                            saiba mais...
                        </button>
                    </div>
                </div>
                <div className="hero-section-right">
                    <div className="figure">
                        <img src={img_hero_01} alt="Hero Section Logo" />
                        <img src={img_hero_02} alt="Hero Section Logo" />
                        <img src={img_hero_03} alt="Hero Section Logo" />
                    </div>
                </div>
            </div>
            {/* Other content of the HeroSection can go here */}
        </div>
    );
}

export default HeroSection;
