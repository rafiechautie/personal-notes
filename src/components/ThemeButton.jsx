import { ThemeConsumer } from "../contexts/ThemeContext";
import {  GoMoon, GoSun } from "react-icons/go";

function ThemeButton(){
    return(
        <ThemeConsumer>
            {({ theme, toggleTheme }) => {
                return <li><button onClick={toggleTheme} className="btnDarkMode">{theme === 'light' ? <GoMoon size={25} /> : <GoSun size={25}/>}</button></li>;
            }}
        </ThemeConsumer>
    )
}

export default ThemeButton;