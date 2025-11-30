import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const BackgroundTransition = ({ image, credit }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    img.src = image;
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, [image]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      backgroundColor: '#0a0a0a'
    }}>
      {!isLoading && (
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <img
            src={image}
            alt="Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          {credit && (
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                right: '1rem',
                fontSize: '0.7rem',
                color: 'rgba(255, 255, 255, 0.4)',
                zIndex: 2,
                pointerEvents: 'auto'
              }}
              dangerouslySetInnerHTML={{ __html: credit }}
            />
          )}
        </motion.div>
      )}

      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            zIndex: 0
          }}
        >
          <span
            style={{
              color: 'var(--color-text)',
              fontSize: '1.5rem',
              letterSpacing: '0.2rem',
              fontWeight: 300
            }}
          >
            YUMPIN.COM
          </span>
        </div>
      )}

      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1
      }}></div>
    </div>
  );
};

export default BackgroundTransition;
