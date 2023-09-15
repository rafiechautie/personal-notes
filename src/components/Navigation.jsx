import { Link } from "react-router-dom";
import { GoArchive, GoMoon, GoSignOut, GoSun } from "react-icons/go";
import ThemeConsumer from '../contexts/LocaleContext'



function Navigation({ logout}){
    return(
        <header>
            <div className="logo">
                <Link to={'/'}>Memoir</Link>
            </div>
            <nav className="navigation">
                <ul>
                    <ThemeConsumer>
                        {({ theme, toogleTheme }) => {
                            <li>
                            <button className="btnDarkMode" onClick={toogleTheme}>
                                {theme === 'light'}
                                ? <GoMoon  size={25}/>
                                : <GoSun size={25}/>
                            </button>
                            </li>
                        }}
                    </ThemeConsumer>
                    <li><Link to={'/archive'} className="archived"><GoArchive size={25} /></Link></li>
                    <li><button className="btnSignOut" onClick={logout}> <GoSignOut  size={25}/></button></li>
                </ul>
            </nav>
        </header>
    )
}


export default Navigation;