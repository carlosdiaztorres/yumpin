import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackgroundTransition from '../components/BackgroundTransition';
import portfolioBg from '../assets/portfolio-jump.jpg';

const Projects = () => {
    const { t } = useTranslation();

    return (
        <>
            <BackgroundTransition
                image={portfolioBg}
                credit={t('home.photoCredit', { author: 'Kristopher Roller', source: 'Unsplash' })}
            />
            <div style={{
                padding: '4rem 2rem',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                color: 'white'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'var(--font-size-h1)', marginBottom: '2rem' }}
                >
                    {t('header.projects')}
                </motion.h1>

                <div style={{ background: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '8px' }}>
                    <p style={{ fontSize: 'var(--font-size-h3)' }}>Coming soon...</p>
                </div>
            </div>
        </>
    );
};

export default Projects;
