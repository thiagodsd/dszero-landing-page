import React from 'react';
import { Link } from 'react-router-dom';
import portfolioItems from '../../content/portfolioItems';
import "../../assets/styles/PortfolioSection.css";

// import clustering_img from "../../assets/images/portfolio/clustering-project.png";
// import regression_img from "../../assets/images/portfolio/regression-project.png";
// import classification_img from "../../assets/images/portfolio/classification-project.png";
import webdev_img from "../../assets/images/portfolio/webdev-project.png";

const imageMap = {
    // 'clustering-project': clustering_img,
    // 'regression-project': regression_img,
    // 'classification-project': classification_img,
    'webdev-project': webdev_img
};

const PortfolioSection = () => {
    const itemsToShow = portfolioItems.slice(0, 9);

    return (
        <div className="portfolio-container">
            <h2>Projetos</h2>
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
                        <div className="portfolio-tags">{item.tags.map(tag => <p>{tag}</p>)}</div>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioSection;
