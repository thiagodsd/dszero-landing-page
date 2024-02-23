import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import portfolioItems from '../../content/portfolioItems';

import webdev_project from "./projects/webdev-project.js";

const portfolioItemComponents = {
    // 'clustering-project': clustering_img,
    // 'regression-project': regression_img,
    // 'classification-project': classification_img,
    'webdev-project': webdev_project
};

const PortfolioItemPage = () => {
    const { id } = useParams();
    const item = portfolioItems.find(item => item.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!item) {
        return <div>Project not found</div>;
    }

    const ItemComponent = portfolioItemComponents[id];

    // return (
    //     <div>
    //         <h1>{item.title}</h1>
    //         <img src={item.featuredImage} alt={item.title} />
    //         <p>{item.description}</p>
    //     </div>
    // );
    return ItemComponent ? <ItemComponent /> : <div>Custom project page not found</div>;
};

export default PortfolioItemPage;
