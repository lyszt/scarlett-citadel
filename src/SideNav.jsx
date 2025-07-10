import React, {useEffect, useState} from 'react';

const navigation = [
    { src: "src/assets/images/home.svg", href: '#', current: true },
    { src: "src/assets/images/home.svg", href: '#', current: true },
    { src: "src/assets/images/home.svg", href: '#', current: true },
    { src: "src/assets/images/home.svg", href: '#', current: true },
    { src: "src/assets/images/home.svg", href: '#', current: true },

]

const MakeButton = ({ src, href, alt }) => {
    return (
        <a className="mr-5 text-gray-600 items-center appearence-none bg-gray-100
        hover:text-blue-500 hover:bg-gray-50 transition-all duration-300 p-2 shadow rounded-full"
           href={href}><img className="w-50" alt={alt} src={src}/></a>
    )
}

const SideNav = () => {
    const [currentTime, setCurrentTime] = useState(null);
    useEffect(() => {
        let time = new Date()
        time = time.toLocaleTimeString();
        setCurrentTime(time);
    }, []);

    return (
        <nav className="w-20 h-50 justify-center items-start fixed top-40 right-10
        sideNav">
            <div className="sideNavGlass w-full h-100 gap-3 justify-center p-2 content-center
            items-center shadow-sm flex flex-col absolute shadow-gray-300 border border-gray-200
             rounded fit-content bg-gradient-to-br from-gray-50 to-gray-100">
                <span className="text-gray-900 w-full text-sm">{currentTime}</span>
                {navigation.map((item) => (
                    <MakeButton key={item.src}
                                src={item.src}
                                href={item.href}
                    />
                ))}
            </div>
        </nav>
    );
};

export default SideNav;


