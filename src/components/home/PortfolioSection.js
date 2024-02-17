import React from 'react';
import { Link } from 'react-router-dom';
import portfolioItems from '../../content/portfolioItems';

const PortfolioSection = () => {
    return (
        <div className="portfolio-grid">
            {portfolioItems.map(item => (
                <div key={item.id} className="portfolio-item">
                    <img src={item.featuredImage} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Link to={`/portfolio/${item.id}`}>View Project</Link>
                </div>
            ))}
        </div>
    );
};

export default PortfolioSection;
