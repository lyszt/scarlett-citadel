import React from 'react';

const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Contact', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Resume', href: '#', current: false },
    { name: 'GitHub', href: '#', current: false },
]

const MakeButton = ({ name, href }) => {
    return (
        <a className="mr-5 text-gray-600 appearence-none
        hover:text-blue-500 hover:bg-gray-200 transition-all duration-300 p-2 rounded-full"
           href={href}>{name}</a>
    )
}

const MainNav = () => {
    return (
        <nav className="border-b border-gray-300 w-full fixed top-0
        gap-4 flex justify-center items-center p-3 left-0
        bg-gradient-to-br from-gray-100 to-white shadow-sm shadow-gray-100">
            <div className="left-10 absolute">
                <a className="inline-flex items-center justify-center gap-3" href="/">
                    <h1 className="text-gray-500 text-l font-medium">LYSZT</h1>
                    <img className="w-10" src="src/assets/images/iconstyle.png" alt="Arrow, login button."/>

                </a>
            </div>

            <div className="shadow-sm shadow-gray-300 border border-gray-200
             rounded-full p-3 pr-5 pl-5 fit-content bg-gradient-to-br from-gray-50 to-gray-100">
                {navigation.map((item) => (
                    <MakeButton key={item.name}
                                name={item.name}
                                href={item.href}
                    />
                ))}
            </div>
            <div className="right-10 absolute bg-gray-100
             shadow-sm border border-gray-200 pr-5 hover:bg-gray-200 duration-200">
                <a className="inline-flex items-center justify-center gap-3" href="/">
                    <img className="w-10" src="src/assets/images/login.svg" alt="Arrow, login button."/>
                    <h1 className="text-gray-500 text-l font-medium">Login</h1>
                </a>
            </div>
        </nav>
    );
};

export default MainNav;


