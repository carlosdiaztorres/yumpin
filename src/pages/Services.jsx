import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackgroundTransition from '../components/BackgroundTransition';
import servicesBg from '../assets/services-jump.jpg';

const ServiceItem = ({ title = '', description = '', delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        style={{ marginBottom: '3rem', background: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '8px' }}
    >
        <h2 style={{ fontSize: 'var(--font-size-service-title)', marginBottom: '1rem', color: 'var(--color-primary)', lineHeight: 1.2 }}>{title || 'Título'}</h2>
        <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-light-grey)', maxWidth: '600px' }}>{description || 'Descripción'}</p>
    </motion.div>
);

const Services = () => {
    const { t } = useTranslation();



    const servicesList = [
        { key: 'digital_accompaniment', delay: 0.1 },
        { key: 'brand_image', delay: 0.2 },
        { key: 'social_promotion', delay: 0.3 },
        { key: 'content_creation', delay: 0.4 },
        { key: 'ai_implementation', delay: 0.5 },
    ];

    return (
        <>
            <BackgroundTransition
                image={servicesBg}
                credit={t('home.photoCredit', { author: 'Vultar Bahr', source: 'Unsplash' })}
            />
            <div style={{
                padding: '8rem 2rem 4rem',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'var(--font-size-h1)', marginBottom: '3rem', textAlign: 'center', color: 'white' }}
                >
                    {t('header.services')}
                </motion.h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {servicesList.map((service) => (
                        <ServiceItem
                            key={service.key}
                            title={t(`services.${service.key}.title`)}
                            description={t(`services.${service.key}.desc`)}
                            delay={service.delay}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
