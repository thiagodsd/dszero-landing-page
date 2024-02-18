import React from "react";
import "../../assets/styles/Services.css";
import ScatterPlot from '../../assets/scripts/ScatterPlot';

function ServicesSection() {
    const scatterPlotData = [
        { x: 0.045, y: 0.078 },
        { x: 0.354, y: 0.545 },
        { x: 0.915, y: 1.001 },
        { x: 0.123, y: 0.234 },
        { x: 0.345, y: 0.456 },
        { x: 0.789, y: 0.987 }
    ];

    return (
        <div>
            <div className="services-container">
                <h2>Serviços</h2>
                <hr/>
                <br/>
                <div className="services-section">
                    <div className="services-plot">
                        <ScatterPlot data={scatterPlotData} />
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default ServicesSection;