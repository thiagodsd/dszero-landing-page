import React from 'react';
import metadata from './webdev-project-metadata';
import "../../../assets/styles/PortfolioPage.css";

import Header from '../../common/Header';

const WebDevProject = () => (
    <div className="portfolio-page">
        <Header />
        <div className="portfolio-container">
            <h1>{metadata.title}</h1>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel erat et nunc egestas porttitor. Integer at semper purus. Nulla facilisi. Cras luctus vel elit sit amet vestibulum. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel erat et nunc egestas porttitor. Integer at semper purus. Nulla facilisi. Cras luctus vel elit sit amet vestibulum.</p>
        </div>
    </div>
);

export default WebDevProject;