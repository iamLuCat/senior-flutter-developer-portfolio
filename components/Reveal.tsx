
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  // Kiểu hiệu ứng: 'slide-up' | 'fade' | 'scale'
  effect?: 'slide-up' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  contentClassName?: string;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  contentClassName = "",
  effect = "slide-up",
  delay = 0,
  duration = 800,
  threshold = 0.15,
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!once) {
        setIsVisible(false);
      }
    }, {
      threshold,
      rootMargin: '0px 0px -50px 0px'
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [once, threshold]);

  const getInitialStyles = () => {
    switch (effect) {
      case 'slide-up':
        return 'opacity-0 translate-y-8';
      case 'scale':
        return 'opacity-0 scale-[0.95] translate-y-4';
      case 'fade':
        return 'opacity-0';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  const getVisibleStyles = () => {
    switch (effect) {
      case 'slide-up':
        return 'opacity-100 translate-y-0';
      case 'scale':
        return 'opacity-100 scale-100 translate-y-0';
      case 'fade':
        return 'opacity-100';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition-all will-change-[transform,opacity]`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay * 1000}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        isolation: 'isolate', // Tạo stacking context mới để tránh lỗi render layer
        backfaceVisibility: 'hidden', // Ép trình duyệt render mượt hơn
        ...(isVisible ? {} : { pointerEvents: 'none' })
      }}
    >
      <div className={`${isVisible ? getVisibleStyles() : getInitialStyles()} transition-all duration-inherit delay-inherit ease-inherit ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Reveal;
