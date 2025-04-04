import React, { useEffect, useRef } from 'react';

const Visualizer = ({ getFrequencyData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      requestAnimationFrame(draw);

      const data = getFrequencyData();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw frequency data
      const barWidth = canvas.width / data.length;
      data.forEach((value, index) => {
        const y = Math.log10((value + 300) / 100) * canvas.height * 2; // Apply logarithmic scaling
        ctx.fillStyle = '#cccccc';
        ctx.fillRect(index * barWidth, canvas.height - y, barWidth, y);
      });
    };

    draw();
  }, [getFrequencyData]);

  return <canvas ref={canvasRef} width="400" height="200"></canvas>;
};

export default Visualizer;
