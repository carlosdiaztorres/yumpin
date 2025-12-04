import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackgroundTransition from '../components/BackgroundTransition';
import contactBg from '../assets/contact-jump.jpg';


const Contact = () => {
    const { t } = useTranslation();

    return (
        <>
            <BackgroundTransition
                image={contactBg}
                credit={t('home.photoCredit', { author: 'Max MX', source: 'Unsplash' })}
            />
            <div style={{
                padding: '8rem 2rem 4rem',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        backdropFilter: 'blur(10px)',
                        padding: '3rem',
                        borderRadius: '8px',
                        maxWidth: '600px',
                        width: '100%',
                        borderRadius: '8px',
                        maxWidth: '600px',
                        width: '100%',
                        textAlign: 'center',
                        WebkitMaskImage: 'linear-gradient(140deg, black 20px, transparent 20px, transparent 24px, black 24px, black 28px, transparent 28px, transparent 32px, black 32px)',
                        maskImage: 'linear-gradient(140deg, black 20px, transparent 20px, transparent 24px, black 24px, black 28px, transparent 28px, transparent 32px, black 32px)'
                    }}
                >
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: 'var(--font-size-h3)', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{t('contact.ready')}</h2>
                        <p style={{ fontSize: 'var(--font-size-body)', marginBottom: '2rem' }}>{t('contact.subtitle')}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        <a href="mailto:yump@yumpeen.com" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}>
                            yump@yumpeen.com
                        </a>
                        <a href="https://wa.me/34687362130" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}>
                            +34 687 36 21 30
                        </a>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Contact;
