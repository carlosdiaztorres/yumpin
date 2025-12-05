import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FullScreenSection = ({ title, subtitle, align = 'center', linkTo, onActivate }) => {
    const Content = () => (
        <div style={{
            maxWidth: '1200px',
            padding: '0 var(--spacing-container)',
            marginLeft: align === 'left' ? '5%' : 0,
            marginRight: align === 'right' ? '5%' : 0,
            width: '100%'
        }}>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                style={{ fontSize: 'var(--font-size-h1)', marginBottom: '1rem', fontWeight: 800, lineHeight: 1.1 }}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.5 }}
                    style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-light-grey)' }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );

    return (
        <motion.section
            onViewportEnter={onActivate}
            viewport={{ amount: 0.3 }}
            style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
                scrollSnapAlign: 'start',
                overflow: 'hidden',
                color: 'white',
                textAlign: align === 'center' ? 'center' : align === 'right' ? 'right' : 'left'
            }}
        >
            {/* Content */}
            {linkTo ? (
                <Link
                    to={linkTo}
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        width: '100%',
                        display: 'flex',
                        justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                    <Content />
                </Link>
            ) : (
                <Content />
            )}
        </motion.section>
    );
};

export default FullScreenSection;
