import React from 'react';
import { Link } from 'react-router-dom';
import portfolioItems from '../../content/portfolioItems';
import "../../assets/styles/PortfolioSection.css";

import clustering_img from "../../assets/images/portfolio/clustering-project.png";
import regression_img from "../../assets/images/portfolio/regression-project.png";

const imageMap = {
    'clustering-project': clustering_img,
    'regression-project': regression_img
};

const PortfolioSection = () => {
    const itemsToShow = portfolioItems.slice(0, 9);

    return (
        <div className="portfolio-container">
            <h2>Portfolio</h2>
            <hr/>
            <br/>
            <div className="portfolio-grid">
                {itemsToShow.map(item => (
                    <div key={item.id} className="portfolio-item">
                        <Link to={`/portfolio/${item.id}`} className="portfolio-overlay-link">
                            <img src={imageMap[item.id] || item.featuredImage} alt={item.title} />
                            <div className="portfolio-item-overlay">Ver Projeto</div>
                        </Link>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioSection;
