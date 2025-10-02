import React, { useState } from 'react';
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

const LanguageSelector = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode);
        onClose();
    };

    return (
        <div
            className={`fixed inset-0 z-30 flex items-end transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        >
            <div
                className={`w-full h-1/2 bg-white rounded-t-3xl shadow-2xl p-8 flex flex-col items-center justify-center transform transition-transform duration-1000 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('selectLanguage')}</h2>
                <p className="text-gray-500 mb-8">{t('chooseLanguagePrompt')}</p>

                <div className="flex gap-4">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300"
                            onClick={() => handleLanguageChange(lang.code.toLowerCase())}
                        >
                            {lang.name}
                        </button>
                    ))}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
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

                <div className="w-full nav-content-wrapper flex justify-between items-center gap-4">
                    <div className="flex-shrink-0 brightness-100 hover:brightness-80 duration-500 z-5">
                        <a className="inline-flex items-center justify-center gap-3 text-black" href="/">
                            <h1 className="navTitle text-black text-l font-medium hover:text-blue-400">LYSZT</h1>
                        </a>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="flex-shrink-0 bg-gray-100 shadow-sm rounded-full z-5 hover:bg-gray-50">
                            <button
                                className="inline-flex items-center justify-center gap-3 p-3"
                                onClick={() => setLanguageSelectorOpen(true)}
                            >
                                <img className="w-4" src={worldIcon} alt={t('translateAlt')} />
                            </button>
                        </div>

                        <div className="shadow-sm shadow-gray-300 border border-gray-200
                 rounded-full p-1 fit-content bg-gradient-to-br from-gray-50 to-gray-100 z-5
                 flex items-center">
                            {navigation.map((item) => (
                                <MakeButton key={item.key}
                                            tKey={item.key}
                                            originalName={item.name}
                                            href={item.href}
                                            onClick={props.onClickHide}
                                />
                            ))}
                        </div>
                        <div className="flex-shrink-0 z-5">
                            <MusicPlayer />
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-shrink-0 items-center justify-center bg-gray-100 brightness-100 hover:bg-gray-200 duration-200
                 shadow-sm border border-gray-200 rounded-full z-5">
                        <a className="inline-flex items-center justify-center p-3 text-xs md:text-base md:px-6" href="/">
                            <h1 className="text-gray-900 font-medium">Login</h1>
                        </a>
                    </div>
                </div>
            </nav>

            <LanguageSelector
                isOpen={isLanguageSelectorOpen}
                onClose={() => setLanguageSelectorOpen(false)}
            />
        </>
    );
};

export default MainNav;