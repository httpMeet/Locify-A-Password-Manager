import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={`shadow-md py-7 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-sm text-center">
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>&copy; {new Date().getFullYear()} Locify. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;