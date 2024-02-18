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

            let lineAdded = false;

            const mousemoveHandler = (event) => {
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

            const mouseoutHandler = (event) => {
                if (lineAdded) {
                    scatterChart.data.datasets = scatterChart.data.datasets.filter(d => d.type !== 'line');
                    lineAdded = false;
                    scatterChart.update();
                }
            };

            // Add event listeners
            const canvas = chartRef.current;
            canvas.addEventListener('mousemove', mousemoveHandler);
            canvas.addEventListener('mouseout', mouseoutHandler);

            // Cleanup function
            return () => {
                scatterChart.destroy();
                canvas.removeEventListener('mousemove', mousemoveHandler);
                canvas.removeEventListener('mouseout', mouseoutHandler);
            };
        }
    }, [data]);

    return <canvas ref={chartRef} width="400" height="400" style={{ background: 'black' }} />;
};

export default ScatterPlot;
