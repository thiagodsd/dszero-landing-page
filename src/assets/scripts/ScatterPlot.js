import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ScatterPlot = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
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

            // Function to add the regression line
            const addRegressionLine = () => {
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
                scatterChart.update();
            };

            // Intersection Observer for adding the line when the chart is in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        addRegressionLine();
                        // Optional: Unobserve after adding the line
                        observer.unobserve(chartRef.current);
                    }
                });
            }, {
                threshold: 0.99 // Trigger when 50% of the chart is visible
            });

            observer.observe(chartRef.current);

            // Cleanup function
            return () => {
                scatterChart.destroy();
                observer.disconnect();
            };
        }
    }, [data]);

    return <canvas ref={chartRef} width="400" height="400" style={{ background: 'black' }} />;
};

export default ScatterPlot;
