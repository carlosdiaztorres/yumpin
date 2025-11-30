import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = ({ onActivate }) => {
    const { t } = useTranslation();

    return (
        <motion.section
            onViewportEnter={onActivate}
            viewport={{ amount: 0.3 }}
            style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                color: 'white',
                textAlign: 'center',
                scrollSnapAlign: 'start'
            }}
        >
            {/* Content */}
            <div style={{ maxWidth: '800px', padding: '0 2rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ fontSize: 'var(--font-size-h1)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}
                >
                    {t('home.heroTitle')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    style={{ fontSize: 'var(--font-size-body)', marginBottom: '2.5rem', color: '#e0e0e0' }}
                >
                    {t('home.heroSubtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button style={{
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        boxShadow: '0 4px 15px rgba(239, 35, 60, 0.4)'
                    }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.backgroundColor = 'var(--color-dark-red)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.backgroundColor = 'var(--color-primary)';
                        }}
                    >
                        {t('home.cta')}
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
