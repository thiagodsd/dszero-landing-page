import React, { useEffect } from 'react';
import AOS from 'aos';
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import PortfolioItemPage from "./components/portfolio/PortfolioItemPage";

import "./assets/styles/globals.css";
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration : 1200,
            data_aos_offset : 300,
            data_aos_easing : "ease-in-sine"
        });
    }, []);
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
            </Routes>
        </div>
    );
}

export default App;
