import React, {useEffect, useRef, useState} from 'react';
import { useTranslation, Trans } from 'react-i18next';
import MainNav from './nav.jsx';
import UffsPhoto from './assets/images/page/uffs.jpg';
import AbstrackBlackVideo from './assets/videos/abstractblack.webm';
import './App.css';


const About = React.forwardRef((props, ref) => {
    const { t } = useTranslation();

    return (
        <section className="z-10 w-screen absolute top-0 left-0 h-full" id="About">
            <div className="bg-stone-100 items-start justify-center flex-row-reverse flex gap-10">
                <video className="w-[80%] m-20" src={AbstrackBlackVideo} autoPlay muted loop/>
            </div>
            <div className="bg-stone-100 items-start justify-center flex-row-reverse flex gap-10 pb-[10%]">
                <div className="w-[80%] text-right gap-3 flex mr-[10%] ">
                    <h2 className="text-stone-800 text-2xl tracking-wide font-bold">{t('aboutTitle')}</h2>
                    <p className="text-stone-800 text-xl tracking-wide mr-10">
                        <Trans i18nKey="aboutParagraph1" components={{ strong: <strong /> }} />
                    </p>
                    <p className="text-stone-800 text-xl tracking-wide mr-10">
                        <Trans i18nKey="aboutParagraph2" components={{ strong: <strong /> }} />
                    </p>
                </div>
            </div>
            <div className="bg-stone-900 items-start justify-center flex-col flex gap-10 pb-[10%]">
                <div className="w-1/2 text-left flex-col gap-3 flex ml-[10%] mt-[10%]">
                    <h2 className="text-stone-100 text-2xl tracking-wide font-bold">{t('educationTitle')}</h2>
                    <p className="text-stone-100 text-xl tracking-wide mr-10">
                        <Trans i18nKey="educationParagraph1" components={{ strong: <strong /> }} />
                    </p>
                    <p className="text-stone-100 text-xl tracking-wide mr-10">
                        <Trans i18nKey="educationParagraph2" components={{ strong: <strong /> }} />
                    </p>
                    <a href="https://kaldwin.escavador.com/" target="_blank" title={t('lattesTitle')} className="button-primary p-3 w-[15%] mt-5 flex flex-row justify-center items-center hover:bg-cyan-300">{t('learnMoreButton')}</a>
                </div>
            </div>
        </section>
    );
});

export default About;