import React, { useState, useEffect } from 'react';
import MainContentArea from './components/MainContentArea.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

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

            <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />

            <MainContentArea />

            <Footer isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </div>
    );
}

export default App;