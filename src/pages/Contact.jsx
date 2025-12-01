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
                    {t('header.contact')}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ background: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', padding: '3rem', borderRadius: '8px', maxWidth: '600px', width: '100%' }}
                >
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: 'var(--font-size-h3)', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{t('contact.ready')}</h2>
                        <p style={{ fontSize: 'var(--font-size-body)', marginBottom: '2rem' }}>{t('contact.subtitle')}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        <a href="mailto:jump@yumpin.com" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}>
                            ✉️ jump@yumpin.com
                        </a>
                        <a href="tel:+34687362130" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}>
                            📞 +34 687 36 21 30
                        </a>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Contact;
