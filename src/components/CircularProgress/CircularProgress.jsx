import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CircularProgress = ({ size = 250, strokeWidth = 20, duration = 5, start = false, onAnimationComplete }) => {
    const fgRef = useRef(null);

    const halfSize = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        if (start && fgRef.current) {
            gsap.fromTo(
                fgRef.current,
                { strokeDasharray: `0 ${circumference}` },
                {
                    strokeDasharray: `${circumference} 0`,
                    duration,
                    ease: 'linear',
                    onComplete: onAnimationComplete,
                }
            );
        }
    }, [start, circumference, duration]);

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="circular-progress"
        >
            <circle
                cx={halfSize}
                cy={halfSize}
                r={radius}
                strokeWidth={strokeWidth}
                fill="none"
                stroke="#C3D2E1"
            />
            <circle
                ref={fgRef}
                cx={halfSize}
                cy={halfSize}
                r={radius}
                strokeWidth={strokeWidth}
                fill="none"
                stroke="#0072CE"
                strokeLinecap="round"
                style={{
                    transform: 'rotate(-90deg)',
                    transformOrigin: 'center',
                }}
                strokeDasharray={`0 ${circumference}`}
            />
        </svg>
    );
};

export default CircularProgress;
