import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedSquaresGrid = () => {
    const canvasRef = useRef(null);
    const squares = useRef([]); // Store initial properties of squares
    const animationComplete = useRef(false); // Track if the animation has completed

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = 400; // Set canvas width to 400
        canvas.height = 400; // Set canvas height to 400
        canvas.style.background = 'black';

        const numOfSquaresPerRow = 4;
        const squareSize = 100; // Adjusted square size to fill 400x400 canvas in a 4x4 grid

        // Initialize squares with random positions and rotations
        squares.current = Array.from({ length: 16 }).map((_, index) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            rotation: Math.random() * 360, // Rotation in degrees
            targetX: (index % numOfSquaresPerRow) * squareSize, // Target positions for a 4x4 grid
            targetY: Math.floor(index / numOfSquaresPerRow) * squareSize,
        }));

        // Function to draw squares
        const drawSquares = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            if (animationComplete.current) {
                // Apply gradient fill if animation is complete
                const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
                gradient.addColorStop(0, '#00E0FF');
                gradient.addColorStop(1, '#FE59FF');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            } else {
                // Draw squares in their current state
                squares.current.forEach(square => {
                    ctx.save(); // Save current context state
                    ctx.translate(square.x + squareSize / 2, square.y + squareSize / 2); // Move to the center of the square
                    ctx.rotate((square.rotation * Math.PI) / 180); // Convert degrees to radians and rotate
                    ctx.translate(-squareSize / 2, -squareSize / 2); // Move back to draw the square
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Semi-transparent squares
                    ctx.fillRect(0, 0, squareSize, squareSize); // Draw square
                    ctx.restore(); // Restore context state
                });
            }
        };

        // Animate squares to form a 4x4 grid
        squares.current.forEach((square, index) => {
            gsap.to(square, {
                x: square.targetX,
                y: square.targetY,
                rotation: 0, // Reset rotation to 0
                duration: 2,
                ease: 'power3.out',
                onUpdate: drawSquares, // Redraw squares on each animation frame
                onComplete: () => {
                    if (index === squares.current.length - 1) { // Check if it's the last square to complete
                        animationComplete.current = true; // Mark animation as complete
                        drawSquares(); // Redraw one last time with gradient
                    }
                },
            });
        });
    }, []);

    return <canvas ref={canvasRef} style={{ width: '400px', height: '400px' }}></canvas>;
};

export default AnimatedSquaresGrid;
