import React, {useEffect, useRef, useState} from 'react';
import MainNav from './nav.jsx';
import Intro from './intro.jsx';
import './App.css';

function App() {

    const [introVisible, setIntroVisible] = useState(true);
    const [aboutVisible, setAboutVisible] = useState(true);
    const setButtonStates = [
        setIntroVisible,
        setAboutVisible,
    ]
    function navTransition(name) {
        name = name.trim().toLowerCase();
        console.log(`[INFO] Clicking ${name}.`);
        setButtonStates.forEach(setterFunction => {
            setterFunction(false)
        })
        if(name === 'home') {
            setIntroVisible(true);
        }
    }
    return (
        <main className="z-10">
            <MainNav onClickHide={navTransition}/>
            {introVisible && <Intro/>}
        </main>
    );
}

export default App;
