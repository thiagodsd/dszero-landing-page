import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const scatterPlotData = [
    { x: 0.045, y: 0.078 },
    { x: 0.354, y: 0.545 },
    { x: 0.915, y: 1.001 },
    { x: 0.123, y: 0.234 },
    { x: 0.345, y: 0.456 },
    { x: 0.789, y: 0.987 }
];

const ScatterPlot = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.style.background = 'black';
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const mapToCanvasCoords = (x, y) => {
            // Adjusted mapping to fit [-0.25, 1.25] frame
            const normalizedX = (x + 0.25) / 1.5;
            const normalizedY = (y + 0.25) / 1.5;
            return {
                x: normalizedX * canvasWidth,
                y: canvasHeight - (normalizedY * canvasHeight)
            };
        };

        const drawScatterPlot = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.fillStyle = '#FFDB58';
            scatterPlotData.forEach(point => {
                const { x, y } = mapToCanvasCoords(point.x, point.y);
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                ctx.fill();
            });
        };

        const drawLine = (progress) => {
            const { x: startX, y: startY } = mapToCanvasCoords(0, 0.0918);
            const { x: endX, y: endY } = mapToCanvasCoords(0.915, 1.0705);
            const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
            gradient.addColorStop(0, '#00E0FF');
            gradient.addColorStop(1, '#FE59FF');

            const currentX = startX + (endX - startX) * progress;
            const currentY = startY + (endY - startY) * progress;

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();
        };

        let lineProgress = { value: 0 };
        gsap.to(lineProgress, {
            value: 1,
            duration: 2,
            onUpdate: () => {
                drawScatterPlot();
                drawLine(lineProgress.value);
            }
        });

        return () => {
            gsap.killTweensOf(lineProgress);
        };
    }, []);

    return (
        <div style={{ width: '400px', height: '400px' }}>
            <canvas ref={canvasRef} width="400" height="400" />
        </div>
    );
};

export default ScatterPlot;
