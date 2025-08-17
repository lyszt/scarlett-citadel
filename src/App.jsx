import React, {useEffect, useRef, useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import MainNav from './nav.jsx';
import Intro from './intro.jsx';
import About from "./about.jsx";
import './App.css';
import './MainPage.css';
import './assets/css/Animations.css'
import backgroundVideo from './assets/videos/abstractbackground1.webm'

function App() {
    const [activePage, setActivePage] = useState('home');

    function navTransition(name) {
        name = name.trim().toLowerCase();
        setActivePage(name)
    }

    // Sometimes invert colour
    useEffect(() => {
        // Toggle body class every 3 seconds
        const interval = setInterval(() => {
            document.body.classList.toggle("alternate");
        }, 40000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main>
            <MainNav onClickHide={navTransition}/>

            <AnimatePresence>
                {activePage === 'home' && (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: '0%' }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5 }}
                    >
                        <Intro />
                    </motion.div>
                )}
                {activePage === 'about' && (
                    <motion.div
                        key="about"
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: '0%' }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5 }}
                    >
                        <About />
                    </motion.div>
                )}
            </AnimatePresence>
            { /* This is the background */}
            <video src={backgroundVideo} className="video-background fixed" autoPlay muted loop> </video>

        </main>
    );

}


export default App;
