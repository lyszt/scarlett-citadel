import React, {useEffect, useRef, useState} from 'react';
import MainNav from './nav.jsx';
import './App.css';


const About = React.forwardRef((props, ref) => {
    return (
        <div className="z-10 relative" id="About">
            <p className="text-left w-1/3 text-xl text-stone-900">
                I am a web and software developer and designer who enjoys creating avant-garde
                interactive tools and interfaces. Interested in modernism, minimalism, computational graphics, 4
                machine-learning and language-learning.</p>
        </div>
    );
});

export default About;
