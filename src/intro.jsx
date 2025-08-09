import React, {useEffect, useRef, useState} from 'react';
import MainNav from './nav.jsx';
import './App.css';


function Intro() {
    const [wordState, setWordState] = useState("");


    useEffect(() => {
        setWordState("");
        const textInput = "La simplicité est la sophistication suprême.";
        const timeouts = [];


        [...textInput].forEach((char, index) => {
            const timeout = setTimeout(() => {
                setWordState((prev) => prev + char);
            }, index * 100);
            timeouts.push(timeout);
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, []);
    return (
        <main className="z-10" id="Home">
            <div className="w-full text-center flex flex-col gap-12 justify-center items-center">
                <h1 className="font-bold font-title text-gray-600 text-shadow-2xs shadow-gray-900 text-8xl">
                    {wordState}
                </h1>
                <div className="w-40 brightness-100 shadow-sm bg-gradient-to-r from-gray-700 to-gray-500 h-2 text-center duration-200 rounded-full div-bar">
                </div>
            </div>
        </main>
    );
}

export default Intro;
