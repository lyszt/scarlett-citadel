import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MusicPlayer from './MusicPlayer';
import worldIcon from "./assets/icons/world.svg";

const navigation = [
    { key: 'navHome', name: 'Home', href: '#' },
    { key: 'navAbout', name: 'About', href: '#' },
    { key: 'navResume', name: 'Resume', href: '#' },
    { key: 'navProjects', name: 'Projects', href: '#' },
    { key: 'navPublications', name: 'Publications', href: '#' }
];

const languages = [
    { code: 'EN', name: 'English' },
    { code: 'PT', name: 'Português' },
    { code: 'FR', name: 'Français' },
    { code: 'IT', name: 'Italiano' }
];

const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobile;
};

const LanguageSelector = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode.toLowerCase());
        onClose();
    };
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 bg-black/40' : 'opacity-0 pointer-events-none'}`} onClick={onClose}>
            <div className={`w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{t('selectLanguage')}</h2>
                <p className="text-gray-500 mb-6 text-center">{t('chooseLanguagePrompt')}</p>
                <div className="grid grid-cols-2 gap-3 w-full">
                    {languages.map((lang) => (
                        <button key={lang.code} className="px-4 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300" onClick={() => handleLanguageChange(lang.code)}>
                            {lang.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const MainNav = (props) => {
    const { t } = useTranslation();
    const [isLanguageSelectorOpen, setLanguageSelectorOpen] = useState(false);

    const MakeButton = ({ tKey, originalName, href, onClick }) => {
        return (
            <button className="text-gray-600 appearance-none hover:text-blue-500 hover:bg-gray-200
            transition-all duration-300 rounded-full
            text-xs px-3 py-2
            md:text-base md:px-4"
                    onClick={() => onClick(originalName)}> {t(tKey)} </button>
        )
    }

    return (
        <>
            <nav className="w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] max-w-[950px] fixed left-1/2 -translate-x-1/2 top-5 rounded-xl
         p-2 z-20 transition-all duration-300
        navGlass">
                <div className="liquidGlass-effect"></div>
                <div className="liquidGlass-tint"></div>
                <div className="liquidGlass-shine"></div>

                <div className="w-full nav-content-wrapper flex justify-between items-center gap-4 z-10">
                    <div className="flex-shrink-0 brightness-100 hover:brightness-80 duration-500 z-5">
                        <a className="inline-flex items-center justify-center gap-3 text-black" href="/">
                            <h1 className="navTitle text-black text-l font-medium hover:text-blue-400">LYSZT</h1>
                        </a>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="flex-shrink-0 bg-gray-100 shadow-sm rounded-full z-5 hover:bg-gray-50">
                            <button className="inline-flex items-center justify-center gap-3 p-3" onClick={() => setLanguageSelectorOpen(true)}>
                                <img className="w-4" src={worldIcon} alt={t('translateAlt')} />
                            </button>
                        </div>
                        <div className="shadow-sm shadow-gray-300 border border-gray-200 rounded-full p-1 fit-content bg-gradient-to-br from-gray-50 to-gray-100 z-5 flex items-center">
                            {navigation.map((item) => (
                                <MakeButton key={item.key} tKey={item.key} originalName={item.name} href={item.href} onClick={props.onClickHide} />
                            ))}
                        </div>
                        <div className="flex-shrink-0 z-5">
                            <MusicPlayer />
                        </div>
                    </div>
                    <div className="hidden sm:flex flex-shrink-0 items-center justify-center bg-gray-100 brightness-100 hover:bg-gray-200 duration-200 shadow-sm border border-gray-200 rounded-full z-5">
                        <a className="inline-flex items-center justify-center p-3 text-xs md:text-base md:px-6" href="/">
                            <h1 className="text-gray-900 font-medium">Login</h1>
                        </a>
                    </div>
                </div>
            </nav>
            <LanguageSelector isOpen={isLanguageSelectorOpen} onClose={() => setLanguageSelectorOpen(false)} />
        </>
    );
};

const MobileNav = (props) => {
    const { t } = useTranslation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isLanguageSelectorOpen, setLanguageSelectorOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const NavLink = ({ tKey, onClick }) => (
        <a href="#" className="text-gray-700 text-3xl font-bold py-3 text-center hover:text-blue-500 transition-colors" onClick={onClick}>
            {t(tKey)}
        </a>
    );

    return (
        <>
            {/* The change is here: top-0 is now bottom-0 */}
            <header className="fixed bottom-0 left-0 right-0 z-40 p-4">
                <div className="w-full bg-white/80 backdrop-blur-lg rounded-xl shadow-md p-3 flex justify-between items-center">
                    <a className="font-bold text-xl" href="/">LYSZT</a>
                    <button onClick={toggleMenu} className="z-50 w-8 h-8 flex flex-col justify-center items-center space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </header>
            <div className={`fixed inset-0 bg-gray-100 z-30 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="pt-24 pb-12 px-8 h-full flex flex-col justify-between items-center">
                    <nav className="flex flex-col items-center gap-4">
                        {navigation.map((item) => (
                            <NavLink key={item.key} tKey={item.key} onClick={toggleMenu} />
                        ))}
                    </nav>
                    <div className="flex flex-col gap-6 w-full mb-[10%] ">
                        <MusicPlayer />
                        <div className="flex items-center gap-4">
                            <button onClick={() => setLanguageSelectorOpen(true)} className="bg-white shadow-sm rounded-full p-4 hover:bg-gray-200 transition">
                                <img className="w-6 h-6" src={worldIcon} alt={t('translateAlt')} />
                            </button>
                            <a href="#" className="px-8 py-4 text-lg font-semibold bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <LanguageSelector isOpen={isLanguageSelectorOpen} onClose={() => setLanguageSelectorOpen(false)} />
        </>
    );
};

const ResponsiveNav = (props) => {
    const isMobile = useIsMobile();
    return isMobile ? <MobileNav {...props} /> : <MainNav {...props} />;
};

export default ResponsiveNav;