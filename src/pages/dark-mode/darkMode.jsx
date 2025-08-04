import { useState, useEffect } from 'react';

function DarkMode () {
    const [darkMode, setDarkMode] = useState(false);
    
        // Optional: Save theme in localStorage
        useEffect(() => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                setDarkMode(true);
            }
        }, []);
    
        useEffect(() => {
            localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        }, [darkMode]);

        return [darkMode, setDarkMode]
}

export default DarkMode;