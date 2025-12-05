import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Instagram } from 'lucide-react';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { to: "/", label: t('header.home') },
        { to: "/services", label: t('header.services') },
        { to: "/about", label: t('header.about') },
        { to: "/projects", label: t('header.projects') },
        { to: "/contact", label: t('header.contact') },
    ];

    return (
        <header style={{
            padding: '1rem var(--spacing-container)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'fixed',
            width: '100%',
            zIndex: 100,
            color: 'white',
            backdropFilter: isMenuOpen ? 'blur(10px)' : 'none',
            background: isMenuOpen ? 'rgba(0,0,0,0.9)' : 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
            transition: 'background 0.3s ease'
        }}>
            <a
                href="/"
                style={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    color: 'white',
                    zIndex: 101,
                    transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
                Yumpeen.com
            </a>

            {/* Desktop Nav */}
            <nav className="hidden-mobile" style={{ gap: '1rem', alignItems: 'center' }}>
                {navLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                        {link.label}
                    </Link>
                ))}
                <button
                    onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        padding: 0,
                        marginLeft: '1rem',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                    {i18n.language === 'es' ? 'EN' : 'ES'}
                </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="hidden-desktop" onClick={toggleMenu} style={{ color: 'white', zIndex: 101 }}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && (
                <nav style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.95)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    zIndex: 100
                }}>
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                        style={{
                            background: 'none',
                            border: '1px solid white',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            marginTop: '1rem',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'var(--color-primary)';
                            e.currentTarget.style.borderColor = 'var(--color-primary)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.borderColor = 'white';
                        }}
                    >
                        {i18n.language === 'es' ? 'English' : 'Español'}
                    </button>
                </nav>
            )}
        </header>
    );
};

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#aaa',
            letterSpacing: '1px',
            position: 'relative',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
        }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a
                    href="https://instagram.com/yumpeen"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                    <Instagram size={24} />
                </a>
            </div>
            {t('footer.rights')}
        </footer>
    );
};

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
