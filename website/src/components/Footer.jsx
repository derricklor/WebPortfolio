import React from 'react';

function Footer({ isDarkTheme, toggleTheme }) {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-6 shadow-inner rounded-t-lg">
            <div className="container mx-auto text-center text-sm">
                <p>&copy; 2025 Responsive Layout. All rights reserved.</p>
                <p className="mt-2">Designed with <span className="text-red-400">&hearts;</span> using Tailwind CSS.</p>
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
            </div>
        </footer>
    );
}

export default Footer;
