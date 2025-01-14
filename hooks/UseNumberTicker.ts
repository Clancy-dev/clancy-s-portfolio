import { useState, useEffect } from 'react';

export function useNumberTicker(end: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (timestamp < delay) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      if (!startTime) startTime = timestamp - delay;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, delay]);

  return count;
}

