import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { GoArchive,  GoSignOut, GoSignIn } from "react-icons/go";
import React from "react";
import LocaleContext from "../contexts/LocaleContext";
import ThemeButton from "./ThemeButton";



function Navigation({ logout, isLogin }){
    const { locale, toogleLocale} = React.useContext(LocaleContext)
    

    if(isLogin === null){
        return(
            <header>
                <div className="logo">
                    <Link to={'/'}>Memoir</Link>
                </div>
                <nav className="navigation">
                    <ul>
                    <ThemeButton/>
                        <li><button onClick={toogleLocale} className="btnTranslate">{locale === 'id' ? 'en' : 'id'}</button></li>
                        <li><Link to={'/login'}><GoSignIn size={23}/></Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
    return(
        <header>
            <div className="logo">
                <Link to={'/'}>Memoir</Link>
            </div>
            <nav className="navigation">
                <ul>
                    <ThemeButton/>
                    <li><button onClick={toogleLocale} className="btnTranslate">{locale === 'id' ? 'en' : 'id'}</button></li>
                    <li><Link to={'/archive'} className="archived"><GoArchive size={25} /></Link></li>
                    <li><button className="btnSignOut" onClick={logout}> <GoSignOut  size={25}/></button></li>
                </ul>
            </nav>
        </header>
    )
}

Navigation.propTypes = {
    logout: PropTypes.func,
    isLogin: PropTypes.bool,
}


export default Navigation;