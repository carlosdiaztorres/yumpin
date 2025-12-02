import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import BackgroundTransition from '../components/BackgroundTransition';
import portfolioBg from '../assets/portfolio-jump.jpg';
import trampoleenLogo from '../assets/trampoleen-logo-new.png';
import sismaquaLogo from '../assets/sismaqua-logo-new.png';
import vinarisLogo from '../assets/vinaris-logo-new.png';


const ProjectCard = ({ project, logo, index }) => {
    const { t } = useTranslation();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.pageX,
            y: e.pageY
        });
    };

    const cardStyle = {
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        padding: '3rem 2rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'visible',
        WebkitMaskImage: 'linear-gradient(135deg, black 20px, transparent 20px, transparent 22px, black 22px, black 26px, transparent 26px, transparent 28px, black 28px)',
        maskImage: 'linear-gradient(135deg, black 20px, transparent 20px, transparent 22px, black 22px, black 26px, transparent 26px, transparent 28px, black 28px)'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={cardStyle}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
                <img
                    src={logo}
                    alt={t(`projects.${project}.name`)}
                    style={{
                        maxWidth: '100%',
                        maxHeight: '180px',
                        objectFit: 'contain',
                        filter: 'grayscale(100%) brightness(1.2)',
                        opacity: 0.9
                    }}
                />
            </div>

            {/* Tooltip following cursor */}
            {isHovered && (
                <motion.div
                    style={{
                        position: 'fixed',
                        left: mousePosition.x + 20,
                        top: mousePosition.y + 20,
                        background: 'rgba(3, 19, 40, 0.98)',
                        color: 'white',
                        padding: '1.25rem',
                        borderRadius: '8px',
                        maxWidth: '350px',
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        pointerEvents: 'none',
                        zIndex: 1000,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                        border: '1px solid rgba(239, 35, 60, 0.3)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-primary)', fontSize: '1rem' }}>
                        {t(`projects.${project}.name`)}
                    </strong>
                    {t(`projects.${project}.desc`)}
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.2)', fontSize: '0.85rem', fontStyle: 'italic', color: '#ccc' }}>
                        {t(`projects.${project}.services`)}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

const Projects = () => {
    const { t } = useTranslation();

    const projectsList = [
        { key: 'trampoleen', logo: trampoleenLogo },
        { key: 'sismaqua', logo: sismaquaLogo },
        { key: 'vinaris', logo: vinarisLogo }
    ];

    return (
        <>
            <BackgroundTransition
                image={portfolioBg}
                credit={t('home.photoCredit', { author: 'Kristopher Roller', source: 'Unsplash' })}
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
                    {t('header.projects')}
                </motion.h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projectsList.map((project, index) => (
                        <ProjectCard
                            key={project.key}
                            project={project.key}
                            logo={project.logo}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
