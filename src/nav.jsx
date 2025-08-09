import React from 'react';

const navigation = [
    {name:  'Home', href: '#', current: true},
    { name: 'About', href: '#', current: false },
    { name: 'Hire me', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Resume', href: '#', current: false }
]



const MainNav = (props) => {

    const MakeButton = ({ name, href , onClick}) => {
        return (
        <button className="mr-5 text-gray-600 appearence-none
        hover:text-blue-500 hover:bg-gray-200 transition-all pl-4 pr-4 duration-300 p-2 rounded-xl"
                    onClick={() => onClick(name)}> {name}</button>
        )
    }

    return (
        <nav className="w-350 fixed left-50 bottom-5 rounded-full
        gap-2 flex justify-center items-center p-3 z-20
        navGlass">
            <div className="left-10 absolute brightness-100 hover:brightness-80 duration-500">
                <a className="inline-flex items-center justify-center gap-3" href="/">
                    <h1 className="text-gray-700 text-l font-medium hover:text-blue-400">LYSZT</h1>

                </a>
            </div>

            <div className="shadow-sm shadow-gray-300 border border-gray-200
             rounded-full p-3 pr-5 pl-5 fit-content bg-gradient-to-br from-gray-50 to-gray-100">
                {navigation.map((item) => (
                    <MakeButton key={item.name}
                                name={item.name}
                                href={item.href}
                                onClick={props.onClickHide}
                    />
                ))}
            </div>
            <div className="right-10 absolute bg-gray-100 brightness-100
             shadow-sm border border-gray-200 pr-6 pl-6 hover:bg-gray-200 duration-200 rounded-full">
                <a className="inline-flex items-center justify-center gap-3 p-3" href="/">
                    <h1 className="text-gray-500 text-l font-medium">Login</h1>
                </a>
            </div>
        </nav>
    );
};

export default MainNav;


