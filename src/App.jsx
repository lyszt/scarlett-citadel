import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import MainNav from './nav.jsx';
import Intro from './intro.jsx';
import About from "./about.jsx";
import LiquidTransition from "./transitions/LiquidTransition.jsx"; // Ensure path is correct
import './App.css';
import './MainPage.css';
import './assets/css/Animations.css'
import backgroundVideo from './assets/videos/abstractbackground1.webm'

function App() {
    const [activePage, setActivePage] = useState('home');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [nextPage, setNextPage] = useState(null);

    function navTransition(name) {
        name = name.trim().toLowerCase();
        if (isTransitioning || name === activePage) {
            return;
        }

        setNextPage(name);
        setIsTransitioning(true);
    }

    const handleCoverComplete = () => {
        setActivePage(nextPage);
        setNextPage(null); // Clean up state
    };

    // This function is now only responsible for resetting the transition state at the very end.
    const handleTransitionComplete = () => {
        setIsTransitioning(false);
    };

    useEffect(() => {
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Intro />
                    </motion.div>
                )}
                {activePage === 'about' && (
                    <motion.div
                        key="about"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <About />
                    </motion.div>
                )}
            </AnimatePresence>

            <video src={backgroundVideo} className="video-background fixed" autoPlay muted loop> </video>

            <LiquidTransition
                isActive={isTransitioning}
                onCoverComplete={handleCoverComplete} // Pass the new mid-point handler
                onAnimationComplete={handleTransitionComplete} // Pass the final handler
            />
        </main>
    );
}

export default App;