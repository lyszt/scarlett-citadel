import React, {useEffect, useRef, useState} from 'react';
import MainNav from './nav.jsx';
import './App.css';


const About = React.forwardRef((props, ref) => {
    return (
        <div className="z-10 relative" id="About">
            <div className="w-full text-center flex flex-col gap-5 justify-center items-center">
                <h2 className="font-bold font-title text-[#4a4a4a] text-shadow-2xs shadow-gray-900 text-8xl">
                    About me
                </h2>
                <span className="font-light text-[#4a4a4a] text-shadow-2xs shadow-gray-900 text-xl">
                    Learn about my interests and development philosophy.
                </span>
            </div>
            <p className="text-left w-1/3 text-xl text-[#4a4a4a]">
                I am a web and software developer and designer who enjoys creating avant-garde
                interactive tools and interfaces. Interested in modernism, minimalism, computational graphics,
                machine-learning and language-learning.</p>
        </div>
    );
});

export default About;
