import React, { useState, useEffect } from 'react';

// Custom scrollbar styles (cannot be directly converted to Tailwind classes or React inline styles)
// These would typically be in a global CSS file, but for a self-contained example,
// we'll include them as a string to be injected.
const customScrollbarStyles = `
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #e0e0e0;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #a0a0a0;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #888;
    }
`;

function App() {
    // State to manage the current theme (true for dark, false for light)
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    // useEffect to handle theme initialization and persistence
    useEffect(() => {
        // Apply custom scrollbar styles dynamically
        const styleTag = document.createElement('style');
        styleTag.innerHTML = customScrollbarStyles;
        document.head.appendChild(styleTag);

        // Check for saved theme preference on component mount
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkTheme(savedTheme === 'dark');
        } else {
            // Default to light theme if no preference is saved
            setIsDarkTheme(false);
        }

        // Clean up the style tag on component unmount
        return () => {
            document.head.removeChild(styleTag);
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    // useEffect to apply/remove 'dark' class to body and update localStorage
    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkTheme]); // Re-run when isDarkTheme changes

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        // Body with base light mode styles and dark mode variants
        <div className="flex flex-col min-h-screen font-inter bg-gray-100 text-gray-900 transition-colors duration-300 ease-in-out dark:bg-gray-900 dark:text-gray-100">

            {/* Header */}
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M3 12h1m15.325-4.757l-.707-.707M4.343 19.657l-.707-.707m12.728 0l-.707.707M4.343 4.343l-.707.707M18 12a6 6 0 11-12 0 6 6 0 0112 0z" />
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

            {/* Main Content Area (including sidebars) */}
            <div className="container mx-auto flex-grow p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {/* Left Sidebar (visible on md screens and up) */}
                <aside className="bg-white p-6 rounded-lg shadow-md md:col-span-1 lg:col-span-1 order-2 md:order-1 dark:bg-gray-800 dark:text-gray-200 dark:shadow-xl">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Left Sidebar</h2>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 dark:hover:text-blue-300">Category 1</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 dark:hover:text-blue-300">Category 2</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 dark:hover:text-blue-300">Category 3</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 dark:hover:text-blue-300">Category 4</a></li>
                    </ul>
                    <div className="mt-6 p-4 bg-blue-50 rounded-md text-blue-700 text-sm dark:bg-blue-900 dark:text-blue-200">
                        <p>This is a small ad or notice section within the sidebar.</p>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-2 order-1 md:order-2 dark:bg-gray-800 dark:text-gray-200 dark:shadow-xl">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Main Content Area</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                        This is the primary content section of the page. On small screens, this content will appear directly below the header.
                        As the screen size increases (medium and large breakpoints), the sidebars will appear alongside this main content,
                        creating a multi-column layout. The design prioritizes readability and accessibility across various devices.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                        We're using Tailwind CSS for a utility-first approach to styling, which makes it easy to build responsive designs
                        without writing custom CSS for every breakpoint. The `grid` and `flex` utilities are key to achieving this flexible layout.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                        <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Key Features:</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 dark:text-gray-400">
                            <li>Mobile-first approach: Optimized for small screens first.</li>
                            <li>Responsive grid layout using Tailwind CSS.</li>
                            <li>Header, main content, two sidebars, and footer sections.</li>
                            <li>Clean and modern aesthetic with rounded corners and shadows.</li>
                        </ul>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-4 dark:text-gray-300">
                        Feel free to resize your browser window to see how the layout adapts!
                    </p>
                </main>

                {/* Right Sidebar (visible on lg screens and up) */}
                <aside className="bg-white p-6 rounded-lg shadow-md lg:col-span-1 order-3 dark:bg-gray-800 dark:text-gray-200 dark:shadow-xl">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Right Sidebar</h2>
                    <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                        This sidebar contains additional information or widgets. On smaller screens (mobile and tablet),
                        it will stack below the main content. On larger screens (desktop), it will appear to the right.
                    </p>
                    <div className="bg-green-50 p-4 rounded-md text-green-700 text-sm dark:bg-green-900 dark:text-green-200">
                        <p>Quick links or related articles could go here.</p>
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                        <li><a href="#" className="hover:text-green-500 transition-colors duration-300 dark:hover:text-green-300">Related Link 1</a></li>
                        <li><a href="#" className="hover:text-green-500 transition-colors duration-300 dark:hover:text-green-300">Related Link 2</a></li>
                    </ul>
                </aside>

            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4 mt-6 shadow-inner rounded-t-lg">
                <div className="container mx-auto text-center text-sm">
                    <p>&copy; 2025 Responsive Layout. All rights reserved.</p>
                    <p className="mt-2">Designed with <span className="text-red-400">&hearts;</span> using Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;