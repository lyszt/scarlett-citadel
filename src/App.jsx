import React, {useEffect, useRef, useState} from 'react';
import MainNav from './nav.jsx';
import SideNav from './SideNav.jsx';
import Intro from './intro.jsx';
import './App.css';

function App() {

    return (
        <main className="z-10">
            <MainNav />
            <SideNav />
            <Intro />
        </main>
    );
}

export default App;
