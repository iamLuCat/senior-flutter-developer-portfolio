
import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  value: string | number;
  duration?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Trích xuất số từ chuỗi (ví dụ: "20+" -> 20)
  const numericValue = typeof value === 'number' ? value : parseInt(value.toString().replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = typeof value === 'string' ? value.replace(/[0-9]/g, '') : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easedProgress * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, numericValue, duration]);

  return (
    <span ref={elementRef} className={className}>
      {count}{suffix}
    </span>
  );
};

export default Counter;
