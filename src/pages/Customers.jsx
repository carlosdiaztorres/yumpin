import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackgroundTransition from '../components/BackgroundTransition';
import portfolioBg from '../assets/portfolio-jump.jpg';

const Customers = () => {
    const { t } = useTranslation();

    return (
        <>
            <BackgroundTransition
                image={portfolioBg}
                credit={t('home.photoCredit', { author: 'Astrid Schaffner', source: 'Unsplash' })}
            />
            <div style={{
                padding: '8rem 2rem 4rem',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh',
                color: 'white'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'var(--font-size-h1)', marginBottom: '2rem', textAlign: 'center' }}
                >
                    {t('header.customers')}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ background: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}
                >
                    <p style={{ fontSize: 'var(--font-size-h3)' }}>Coming soon...</p>
                </motion.div>
            </div>
        </>
    );
};

export default Customers;
