import React, { useEffect, useRef } from 'react';
import MainNav from './nav.jsx';
import './App.css';

function App() {
    const titleRef = useRef();

    function revealWords(reference) {
        const element = reference.current;
        if (!element) return;

        const text = element.textContent;
        element.textContent = "";
        [...text].forEach((char, index) => {
            setTimeout(() => {
                element.textContent += char;
            }, index * 100);
        });
    }

    useEffect(() => {
        revealWords(titleRef);
    }, []);

    return (
        <main className="z-10">
            <MainNav />
            <div className="w-full text-center flex flex-col gap-12 justify-center items-center">
                <h1 ref={titleRef} className="font-bold font-title text-gray-600 text-shadow-2xs shadow-gray-900 text-8xl">
                    La simplicité est la <br />
                    <b className="text-gray-700">sophistication suprême.</b>
                </h1>
                <div className="w-40 brightness-100 shadow-sm bg-gradient-to-r from-gray-700 to-gray-500 h-2 text-center duration-200 rounded-full div-bar">
                </div>
            </div>
        </main>
    );
}

export default App;
