import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackgroundTransition from '../components/BackgroundTransition';
import aboutBg from '../assets/about-jump.jpg';

const About = () => {
    const { t } = useTranslation();

    const containerStyle = {
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        textAlign: 'center',
        WebkitMaskImage: 'linear-gradient(135deg, black 20px, transparent 20px, transparent 22px, black 22px, black 26px, transparent 26px, transparent 28px, black 28px)',
        maskImage: 'linear-gradient(135deg, black 20px, transparent 20px, transparent 22px, black 22px, black 26px, transparent 26px, transparent 28px, black 28px)'
    };

    return (
        <>
            <BackgroundTransition
                image={aboutBg}
                credit={t('home.photoCredit', { author: 'Marc Najera', source: 'Unsplash' })}
            />
            <div style={{
                padding: '8rem 2rem 4rem',
                maxWidth: '1000px',
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
                    style={{ fontSize: 'var(--font-size-h1)', marginBottom: '1rem', textAlign: 'center', lineHeight: 1.2 }}
                >
                    {t('about.title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: 'var(--font-size-body)', textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem', color: '#e0e0e0' }}
                >
                    {t('about.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ ...containerStyle, textAlign: 'center' }}
                >
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: 'var(--font-size-h2)' }}>{t('about.mission.title')}</h2>
                    <p style={{ fontSize: 'var(--font-size-body)' }}>{t('about.mission.desc')}</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {['elevation', 'momentum', 'precision'].map((value, index) => (
                        <motion.div
                            key={value}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                            viewport={{ once: true }}
                            style={containerStyle}
                        >
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: 'var(--font-size-h3)' }}>
                                {t(`about.values.${value}.title`)}
                            </h3>
                            <p style={{ fontSize: 'var(--font-size-body)' }}>{t(`about.values.${value}.desc`)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;
