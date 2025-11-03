import { useState, useRef } from 'react';
import type { ReactNode } from 'react';

interface Interactive3DCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number; // How much the card tilts in degrees
}

const Interactive3DCard = ({ 
  children, 
  className = '', 
  intensity = 15 
}: Interactive3DCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const calculateRotation = (clientX: number, clientY: number) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = clientX - centerX;
    const y = clientY - centerY;

    // Calculate rotation based on position (normalized to -1 to 1)
    const rotateXValue = (y / (rect.height / 2)) * intensity;
    const rotateYValue = (x / (rect.width / 2)) * -intensity;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    calculateRotation(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      calculateRotation(touch.clientX, touch.clientY);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow effect */}
      {isHovering && (
        <div
          className="absolute inset-0 rounded-2xl opacity-20 blur-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${50 + (rotateY / intensity) * 10}% ${50 + (rotateX / intensity) * 10}%, rgba(59, 130, 246, 0.6), transparent 70%)`,
            zIndex: -1,
          }}
        />
      )}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1}, 1)`,
          transition: isHovering ? 'none' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Interactive3DCard;

