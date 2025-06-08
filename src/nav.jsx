import React from 'react';

const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Contact', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Curriculum', href: '#', current: false },
    { name: 'GitHub', href: '#', current: false },
]

const MakeButton = ({ name, href }) => {
    return (
        <a className="mr-5 text-gray-800 appearence-none
        hover:text-black hover:bg-gray-200 p-2 rounded-full"
           href={href}>{name}</a>
    )
}

const MainNav = () => {
    return (
        <nav className="border-b border-gray-100 w-full fixed top-0
        gap-4 flex justify-center items-center p-3 left-0
        bg-gradient-to-br from-gray-50 to-white">
            <div className="shadow-sm border border-gray-200
             rounded-full p-3 pr-5 pl-5 fit-content bg-gradient-to-br from-gray-50 to-gray-100">
            {navigation.map((item) => (
                    <MakeButton key={item.name}
                                name={item.name}
                                href={item.href}
                    />
            ))}
            </div>
        </nav>
    );
};

export default MainNav;


