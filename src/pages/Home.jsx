import { useState, useRef, useEffect } from 'react';
import Hero from '../components/Hero';
import FullScreenSection from '../components/FullScreenSection';
import BackgroundTransition from '../components/BackgroundTransition';
import { useTranslation } from 'react-i18next';

import heroBg from '../assets/hero-jump.jpg';
import brandingBg from '../assets/branding-jump.jpg';
import socialBg from '../assets/social-jump.jpg';
import aiBg from '../assets/ai-jump.jpg';

const Home = () => {
    const { t, i18n } = useTranslation();
    const [currentBg, setCurrentBg] = useState(heroBg);
    // Initial credit based on current language
    const [currentCredit, setCurrentCredit] = useState(t('home.photoCredit', { author: 'Shelby Bauman', source: 'Unsplash' }));
    const containerRef = useRef(null);

    // Update credit when language changes if we are on the hero section
    useEffect(() => {
        if (currentBg === heroBg) {
            setCurrentCredit(t('home.photoCredit', { author: 'Shelby Bauman', source: 'Unsplash' }));
        } else if (currentBg === brandingBg) {
            setCurrentCredit(t('home.photoCredit', { author: 'Alexandre Barbosa', source: 'Unsplash' }));
        } else if (currentBg === socialBg) {
            setCurrentCredit(t('home.photoCredit', { author: 'Leo_Visions', source: 'Unsplash' }));
        } else if (currentBg === aiBg) {
            setCurrentCredit(t('home.photoCredit', { author: 'Than Tibbetts', source: 'Unsplash' }));
        }
    }, [i18n.language, currentBg, t]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!containerRef.current) return;

            const height = window.innerHeight;
            const currentScroll = containerRef.current.scrollTop;
            // Calculate the nearest snap point to avoid drift
            const currentSectionIndex = Math.round(currentScroll / height);

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                containerRef.current.scrollTo({
                    top: (currentSectionIndex + 1) * height,
                    behavior: 'smooth'
                });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                containerRef.current.scrollTo({
                    top: (currentSectionIndex - 1) * height,
                    behavior: 'smooth'
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <BackgroundTransition image={currentBg} credit={currentCredit} />

            <div
                ref={containerRef}
                style={{
                    height: '100vh',
                    overflowY: 'scroll',
                    scrollSnapType: 'y mandatory',
                    scrollBehavior: 'smooth',
                    outline: 'none',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Hero onActivate={() => {
                    setCurrentBg(heroBg);
                    setCurrentCredit(t('home.photoCredit', { author: 'Shelby Bauman', source: 'Unsplash' }));
                }} />

                <FullScreenSection
                    title={t('services.branding')}
                    subtitle={t('services.brandingSubtitle')}
                    align="left"
                    linkTo="/services"
                    onActivate={() => {
                        setCurrentBg(brandingBg);
                        setCurrentCredit(t('home.photoCredit', { author: 'Alexandre Barbosa', source: 'Unsplash' }));
                    }}
                />

                <FullScreenSection
                    title={t('services.social')}
                    subtitle={t('services.socialSubtitle')}
                    align="right"
                    linkTo="/services"
                    onActivate={() => {
                        setCurrentBg(socialBg);
                        setCurrentCredit(t('home.photoCredit', { author: 'Leo_Visions', source: 'Unsplash' }));
                    }}
                />

                <FullScreenSection
                    title={t('services.ai')}
                    subtitle={t('services.aiSubtitle')}
                    align="left"
                    linkTo="/services"
                    onActivate={() => {
                        setCurrentBg(aiBg);
                        setCurrentCredit(t('home.photoCredit', { author: 'Than Tibbetts', source: 'Unsplash' }));
                    }}
                />
            </div>
        </>
    );
};

export default Home;
