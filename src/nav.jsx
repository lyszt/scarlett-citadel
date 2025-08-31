import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MusicPlayer from './MusicPlayer';
import worldIcon from "./assets/icons/world.svg";

const navigation = [
    { key: 'navHome', name: 'Home', href: '#' },
    { key: 'navAbout', name: 'About', href: '#' },
    { key: 'navHireMe', name: 'Hire me', href: '#' },
    { key: 'navProjects', name: 'Projects', href: '#' },
    { key: 'navResume', name: 'Resume', href: '#' }
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

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 flex items-end"
            onClick={onClose}
        >
            <div
                className={`w-full h-1/2 bg-white rounded-t-3xl shadow-2xl p-8 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
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
            <button className="mr-5 text-gray-600 appearance-none
        hover:text-blue-500 hover:bg-gray-200 transition-all pl-4 pr-4 duration-300 p-2"
                    onClick={() => onClick(originalName)}> {t(tKey)} </button>
        )
    }

    return (
        <>
            <nav className="w-[50vw] fixed left-50 top-5 rounded-xl
         p-3 z-20 hover:p-3.5 >
        navGlass">
                <div className="liquidGlass-effect"></div>
                <div className="liquidGlass-tint"></div>
                <div className="liquidGlass-shine"></div>

                <div className="nav-content-wrapper gap-2 flex justify-center items-center">
                    <div className="left-10 absolute brightness-100 hover:brightness-80 duration-500 z-5">
                        <a className="inline-flex items-center justify-center gap-3" href="/">
                            <h1 className="text-black text-l font-medium hover:text-blue-400">LYSZT</h1>
                        </a>
                    </div>

                    <div className="bg-gray-100 shadow-sm rounded-full z-5 hover:bg-gray-50">
                        <button
                            className="inline-flex items-center justify-center gap-3 p-3"
                            onClick={() => setLanguageSelectorOpen(true)}
                        >
                            <img className="w-4" src={worldIcon} alt={t('translateAlt')} />
                        </button>
                    </div>
                    <div className="shadow-sm shadow-gray-300 border border-gray-200
                 rounded-full p-3 pr-5 pl-5 fit-content bg-gradient-to-br from-gray-50 to-gray-100 z-5">
                        {/* --- UPDATED to pass both the key and original name --- */}
                        {navigation.map((item) => (
                            <MakeButton key={item.key}
                                        tKey={item.key}
                                        originalName={item.name}
                                        href={item.href}
                                        onClick={props.onClickHide}
                            />
                        ))}
                    </div>
                    <MusicPlayer />

                    <div className="right-10 absolute bg-gray-100 brightness-100 hover:pr-6.5 hover:pl-6.5 hover:p7 transition-[5s]
                 shadow-sm border border-gray-200 pr-6 pl-6 hover:bg-gray-200 duration-200 rounded-full z-5">
                        <a className="inline-flex items-center justify-center p-3" href="/">
                            <h1 className="text-gray-900 text-l font-medium">Login</h1>
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