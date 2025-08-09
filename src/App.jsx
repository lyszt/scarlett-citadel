import React, {useEffect, useRef, useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import MainNav from './nav.jsx';
import Intro from './intro.jsx';
import './App.css';
import './assets/css/Animations.css'

function App() {
    const [activePage, setActivePage] = useState('home');
    const nodeRef = useRef(null);

    function navTransition(name) {
        name = name.trim().toLowerCase();
        setActivePage(name)
    }
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
            </AnimatePresence>
        </main>
    );

}

export default App;
