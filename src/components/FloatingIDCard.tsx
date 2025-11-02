import { motion } from 'framer-motion';
import Interactive3DCard from './Interactive3DCard';

interface FloatingIDCardProps {
  profileImage: string;
  name: string;
  brandName?: string;
  className?: string;
}

const FloatingIDCard = ({ 
  profileImage, 
  name,
  brandName = "portfolio",
  className = '' 
}: FloatingIDCardProps) => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`relative ${className}`}
    >
      {/* Lanyard */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative">
          {/* Lanyard strap */}
          <div className="w-1.5 h-24 bg-black dark:bg-gray-700 relative overflow-hidden">
            {/* Repeating text pattern */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `repeating-linear-gradient(
                  180deg,
                  transparent,
                  transparent 14px,
                  rgba(255, 255, 255, 0.9) 14px,
                  rgba(255, 255, 255, 0.9) 28px
                )`,
              }}
            >
              <div 
                className="text-white dark:text-gray-300 text-[5px] font-bold uppercase tracking-widest whitespace-nowrap"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  transform: 'rotate(180deg)',
                }}
              >
                {brandName} {brandName} {brandName} {brandName}
              </div>
            </div>
          </div>
          {/* Lanyard clip/hook */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-black dark:bg-gray-700 rounded-full border-2 border-gray-800 dark:border-gray-600"></div>
        </div>
      </div>

      <Interactive3DCard intensity={10} className="w-full">
        {/* ID Card Container - Frosted Glass/Plastic Effect */}
        <div 
          className="relative rounded-lg shadow-2xl overflow-hidden"
          style={{
            background: 'rgba(20, 20, 20, 0.7)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Circular hole for lanyard */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <div 
              className="w-8 h-8 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)',
                border: '3px solid rgba(255, 255, 255, 0.2)',
                boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            ></div>
          </div>

          {/* Top Section - Logo and Brand */}
          <div className="relative px-4 pt-8 pb-3 flex items-center justify-between">
            {/* Logo - Stylized Letter */}
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.95)',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <span 
                className="text-xl font-bold"
                style={{ color: 'rgba(255, 255, 255, 0.95)' }}
              >
                {name.charAt(0).toUpperCase()}
              </span>
            </div>
            
            {/* Brand Name */}
            <div 
              className="text-sm font-medium tracking-wider uppercase"
              style={{ color: 'rgba(255, 255, 255, 0.95)' }}
            >
              {brandName}
            </div>
          </div>

          {/* Main Portrait Section */}
          <div className="relative px-4 pb-4">
            <div className="w-full aspect-[3/4] rounded-md overflow-hidden bg-gray-950 relative">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover"
                style={{
                  filter: 'grayscale(100%) contrast(1.2) brightness(0.85)',
                  mixBlendMode: 'normal',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center">
                        <div class="text-white text-6xl font-bold">${name.charAt(0).toUpperCase()}</div>
                      </div>
                    `;
                  }
                }}
              />
              {/* Subtle vertical texture overlay (like wood paneling) */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  background: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 255, 255, 0.1) 2px,
                    rgba(255, 255, 255, 0.1) 4px
                  )`,
                }}
              />
            </div>
          </div>

          {/* Frosted glass reflection effect */}
          <div 
            className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
              mixBlendMode: 'overlay',
            }}
          />
        </div>
      </Interactive3DCard>
    </motion.div>
  );
};

export default FloatingIDCard;
