import React, { useState } from 'react'
import MainNav from './nav.jsx';
import './App.css'

function App() {

  return (
    <main>
        <MainNav/>
        <div className="w-full text-center flex flex-col gap-12 justify-center items-center">
            <h1 className="font-bold font-title text-gray-600 text-shadow-2xs shadow-gray-900 text-8xl"> La simplicité est la <br></br>
                <b className="text-gray-700"> sophistication suprême.</b> </h1>
            <div className="w-40  brightness-100
             shadow-sm from-gray-700 to-gray-800 h-2 text-center duration-200 rounded-full">
            </div>
        </div>
    </main>
  )
}

export default App
