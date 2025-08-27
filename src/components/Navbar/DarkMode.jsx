import React from 'react'
import lightbutton from '../../assets/website/light-mode-button.png';
import darkbutton from '../../assets/website/dark-mode-button.png';

export const DarkMode = () => {
    const[theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element = document.documentElement;
    console.log(element);
    React.useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className='relative w-12 flex items-center justify-center'>
            <img
                onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                }}
                src={lightbutton}
                alt=""
                className={`absolute inset-0 m-auto w-12 cursor-pointer transition duration-300 ease-in-out ${theme === "dark" ? "opacity-0" : "opacity-100" }`}
            />
            <img
                onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                }}
                src={darkbutton}
                alt=""
                className={`absolute inset-0 m-auto w-12 cursor-pointer ${theme === "light" ? "opacity-0" : "opacity-100"}`}
            />
        </div>
    );
}
