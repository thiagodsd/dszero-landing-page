import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const ScatterPlot = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartElement = chartRef.current; 

        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 400, 0);
            gradient.addColorStop(0, '#00E0FF');
            gradient.addColorStop(1, '#FE59FF');

            const scatterChart = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'Scatter Dataset',
                        data: data,
                        backgroundColor: '#FFDB58',
                    }],
                },
                options: {
                    responsive: true, // Ensure the chart is responsive
                    maintainAspectRatio: false, // Optional: if you want the chart to scale in both dimensions without preserving the aspect ratio
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    },
                    plugins: {
                        legend: { display: false },
                    },
                    elements: {
                        line: {
                            borderColor: gradient,
                            borderWidth: 2,
                        },
                        point: {
                            radius: 5
                        }
                    },
                    backgroundColor: 'black',
                }
            });

            let lineAdded = false;

            const addLine = () => {
                if (!lineAdded) {
                    scatterChart.data.datasets.push({
                        data: [
                            { x: 0, y: 0.0918 }, 
                            { x: 1, y: 1.1615 }
                        ],
                        type: 'line',
                        borderColor: gradient,
                        borderWidth: 2,
                        showLine: true,
                        fill: false,
                        pointRadius: 0,
                    });
                    lineAdded = true;
                    scatterChart.update();
                }
            };

            const removeLine = () => {
                if (lineAdded) {
                    scatterChart.data.datasets = scatterChart.data.datasets.filter(d => d.type !== 'line');
                    lineAdded = false;
                    scatterChart.update();
                }
            };

            // Intersection Observer to detect when the chart is in view
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                            addLine();
                        } else {
                            removeLine();
                        }
                    });
                },
                {
                    threshold: 0.5 // Trigger when 50% of the element is in view
                }
            );

            observer.observe(chartRef.current);

            // Cleanup function
            return () => {
                scatterChart.destroy();
                observer.unobserve(chartElement);
            };
        }
    }, [data]);

    return (
        <div style={{ width: '400px', height: '400px' }}> {/* Container to control the chart size */}
            <canvas ref={chartRef} style={{ width: '100%', height: '400px', background: 'black' }} />
        </div>
    );
};

export default ScatterPlot;
