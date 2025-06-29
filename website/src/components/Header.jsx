import React from 'react';

function Header({ isDarkTheme, toggleTheme }) {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg rounded-b-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Responsive Layout</h1>
                <nav className="flex items-center space-x-4">
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">Home</a></li>
                        <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">About</a></li>
                        <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">Services</a></li>
                        <li><a href="#" className="hover:text-blue-200 transition-colors duration-300">Contact</a></li>
                    </ul>
                    {/* Theme Toggle Button */}
                    <button
                        id="theme-toggle"
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-transparent hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                    >
                        {/* Sun Icon (shown in dark mode) */}
                        <svg
                            id="sun-icon"
                            className={`h-6 w-6 text-yellow-300 ${isDarkTheme ? '' : 'hidden'}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v2m0 18v2m9-11h2M1 12h2m16-8-1 1M5 19l-1 1m16 0-1-1M5 5 4 4m14 8A6 6 90 116 12a6 6 90 0112 0z" />
                        </svg>
                        {/* Moon Icon (shown in light mode) */}
                        <svg
                            id="moon-icon"
                            className={`h-6 w-6 text-white ${isDarkTheme ? 'hidden' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
