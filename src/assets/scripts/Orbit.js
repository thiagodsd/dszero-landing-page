import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ClusteringIllustration = () => {
    const canvasRef = useRef(null);
    const animationRefs = useRef({ dots: null, squares: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = 400;
        canvas.height = 400;
        canvas.style.background = 'black';

        const points = {
            dots: [{ x: 50, y: 50 }, { x: 80, y: 80 }, { x: 30, y: 100 }],
            squares: [{ x: 300, y: 300 }, { x: 350, y: 320 }]
        };

        const drawPoints = () => {
            ctx.fillStyle = '#FFDB58';
            points.dots.forEach(dot => {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, 5, 0, 2 * Math.PI);
                ctx.fill();
            });

            points.squares.forEach(square => {
                ctx.fillRect(square.x - 5, square.y - 5, 10, 10);
            });
        };

        const animateArc = (centerX, centerY, pointsSet) => {
            let arcLength = { value: 0 };
            const tl = gsap.timeline({
                paused: true,
                onUpdate: () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    drawPoints();
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, 50, 0, arcLength.value * Math.PI);
        
                    // Create a linear gradient for the stroke
                    const gradient = ctx.createLinearGradient(centerX - 50, centerY - 50, centerX + 50, centerY + 50);
                    gradient.addColorStop(0, '#00E0FF');
                    gradient.addColorStop(1, '#FE59FF');
        
                    ctx.strokeStyle = gradient;
                    ctx.stroke();
                }
            });
        
            tl.to(arcLength, { value: 2, duration: 2, ease: "power1.inOut" });
            return tl;
        };

        const setupAnimations = () => {
            const dotsCenter = { x: 53, y: 77 };
            const squaresCenter = { x: 325, y: 310 };

            animationRefs.current.dots = animateArc(dotsCenter.x, dotsCenter.y, points.dots, 'yellow');
            animationRefs.current.squares = animateArc(squaresCenter.x, squaresCenter.y, points.squares, 'yellow');
        };

        setupAnimations();

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animationRefs.current.dots.play();
                    animationRefs.current.squares.play();
                } else {
                    animationRefs.current.dots.reverse();
                    animationRefs.current.squares.reverse();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(canvas);

        return () => observer.disconnect();
    }, []);

    // return <canvas ref={canvasRef} />;
    // return <canvas ref={canvasRef} width="400" height="400" style={{ background: 'black' }} />;
    return (
        <div style={{ width: '400px', height: '400px' }}> {/* Container to control the chart size */}
            <canvas ref={canvasRef} style={{ width: '400px', height: '400px', background: 'black' }} />
        </div>
    );
};

export default ClusteringIllustration;
