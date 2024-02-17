import React from 'react';
import { useParams } from 'react-router-dom';
import portfolioItems from '../../content/portfolioItems';

const PortfolioItemPage = () => {
    const { id } = useParams();
    const item = portfolioItems.find(item => item.id === id);

    if (!item) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <h1>{item.title}</h1>
            <img src={item.featuredImage} alt={item.title} />
            <p>{item.description}</p>
        </div>
    );
};

export default PortfolioItemPage;
