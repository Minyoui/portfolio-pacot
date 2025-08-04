import './toggle.css';
import DarkMode from '../dark-mode/darkMode';

function Toggle () {
    const [setDarkMode] = DarkMode();
    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)}> I am in dark mode!</button>
        </>
    )
}

export default Toggle;