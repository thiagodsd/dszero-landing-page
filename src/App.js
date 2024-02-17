import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import PortfolioItemPage from "./components/portfolio/PortfolioItemPage";
import "./assets/styles/globals.css";

function App() {
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
