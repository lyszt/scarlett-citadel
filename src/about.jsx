import React, {useEffect, useRef, useState} from 'react';
import MainNav from './nav.jsx';
import UffsPhoto from './assets/images/page/uffs.jpg';
import AbstrackBlackVideo from './assets/videos/abstractblack.webm';
import './App.css';


const About = React.forwardRef((props, ref) => {
    return (
        <section className="z-10 w-screen absolute top-0 left-0 h-full" id="About">
            <div className="bg-stone-100 items-start justify-center flex-row-reverse flex gap-10">
                <video className="w-[80%] m-20" src={AbstrackBlackVideo} autoPlay muted/>
            </div>
            <div className="bg-stone-100 items-start justify-center flex-row-reverse flex gap-10 pb-[10%]">
                <div className="w-[80%] text-right gap-3 flex mr-[10%] ">
                    <h2 className="text-stone-800 text-2xl tracking-wide font-bold">SI FALLOR, SUM</h2>
                    <p className="text-stone-800 text-xl tracking-wide mr-10">
                        I am a web and software developer and designer who enjoys creating avant-garde interactive tools and interfaces. Interested in modernism, minimalism, computational graphics, machine-learning and language-learning.                    </p>
                    <p className="text-stone-800 text-xl tracking-wide mr-10">
                        Since several years ago, I have been working autonomously as a freelance web developer and graphic designer, specializing in user-centric design (UI/UX) and complex software development. I'm available in French, English, and Portuguese. Whether you're based in Paris, New York, São Paulo, or anywhere else in the world, really. I'm ready to bring your ideas to life—no matter the language or location. If you wish to hire a multi-skilled, adaptable professional, then reach out to me. Let's get started on your next project today.                     </p>
                </div>
            </div>
            <div className="bg-stone-900 items-start justify-center flex-col flex gap-10 pb-[10%]">
                <div className="w-1/2 text-left flex-col gap-3 flex ml-[10%] mt-[10%]">
                    <h2 className="text-stone-100 text-2xl tracking-wide font-bold">EDUCATION</h2>
                    <p className="text-stone-100 text-xl tracking-wide mr-10">
                        My academic journey began at the <strong>Fundação Instituto de Educação de Barueri (FIEB)</strong>, where an associate degree gave me a solid, hands-on foundation in software development and project implementation.
                    </p>
                    <p className="text-stone-100 text-xl tracking-wide mr-10">
                        I am now undergoing a Bachelor's in Computer Science at the <strong>Universidade Federal da Fronteira Sul (UFFS)</strong>.There, I have served as an Undergraduate Teaching Assistant for algorithms and data structures, conducted scientific research in Artificial Intelligence (PIBIC), and earned a Certificate of Achievement in the <strong>International Collegiate Programming Contest (ICPC)</strong>.
                    </p>
                    <a href="https://kaldwin.escavador.com/" target="_blank" title="Lattes curriculum (PT-BR)" className="bg-cyan-400 p-3 w-[15%] mt-5 flex flex-row justify-center items-center hover:bg-cyan-300">Learn more</a>
                </div>
            </div>
        </section>
    );
});

export default About;