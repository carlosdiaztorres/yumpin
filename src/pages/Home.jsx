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

    // Define available backgrounds and their credits
    const backgrounds = [
        { img: heroBg, creditKey: 'Shelby Bauman' },
        { img: brandingBg, creditKey: 'Alexandre Barbosa' },
        { img: socialBg, creditKey: 'Leo_Visions' },
        { img: aiBg, creditKey: 'Than Tibbetts' }
    ];

    // State for randomized backgrounds
    const [randomizedBgs, setRandomizedBgs] = useState([]);
    const [currentBg, setCurrentBg] = useState(heroBg);

    // Initial credit based on current language
    const [currentCredit, setCurrentCredit] = useState(t('home.photoCredit', { author: 'Shelby Bauman', source: 'Unsplash' }));
    const containerRef = useRef(null);

    // Randomize backgrounds on mount
    useEffect(() => {
        const shuffled = [...backgrounds].sort(() => 0.5 - Math.random());
        setRandomizedBgs(shuffled);
        setCurrentBg(shuffled[0].img);
        setCurrentCredit(t('home.photoCredit', { author: shuffled[0].creditKey, source: 'Unsplash' }));
    }, []);

    // Update credit when language changes
    useEffect(() => {
        if (randomizedBgs.length > 0) {
            const currentBgObj = randomizedBgs.find(bg => bg.img === currentBg);
            if (currentBgObj) {
                setCurrentCredit(t('home.photoCredit', { author: currentBgObj.creditKey, source: 'Unsplash' }));
            }
        }
    }, [i18n.language, currentBg, t, randomizedBgs]);

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

    if (randomizedBgs.length === 0) return null; // Wait for randomization

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
                    setCurrentBg(randomizedBgs[0].img);
                    setCurrentCredit(t('home.photoCredit', { author: randomizedBgs[0].creditKey, source: 'Unsplash' }));
                }} />

                <FullScreenSection
                    title={t('services.branding')}
                    subtitle={t('services.brandingSubtitle')}
                    align="left"
                    linkTo="/services"
                    onActivate={() => {
                        setCurrentBg(randomizedBgs[1].img);
                        setCurrentCredit(t('home.photoCredit', { author: randomizedBgs[1].creditKey, source: 'Unsplash' }));
                    }}
                />

                <FullScreenSection
                    title={t('services.social')}
                    subtitle={t('services.socialSubtitle')}
                    align="right"
                    linkTo="/services"
                    onActivate={() => {
                        setCurrentBg(randomizedBgs[2].img);
                        setCurrentCredit(t('home.photoCredit', { author: randomizedBgs[2].creditKey, source: 'Unsplash' }));
                    }}
                />

                <FullScreenSection
                    title={t('services.ai')}
                    subtitle={t('services.aiSubtitle')}
                    align="left"
                    linkTo="/services"
                    onActivate={() => {
                        setCurrentBg(randomizedBgs[3].img);
                        setCurrentCredit(t('home.photoCredit', { author: randomizedBgs[3].creditKey, source: 'Unsplash' }));
                    }}
                />
            </div>
        </>
    );
};

export default Home;
