import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";
import React from "react";


function AuthImage({img}){
    const { locale } = React.useContext(LocaleContext)


    return(
        <div className="signin-image">
            <figure><img src={img} alt="sing up image"/></figure>
            {
                img === "signin-image.jpg"
                ? <Link  to={'/register'} className="sign-link">{locale === 'id' ? 'Buat akun' : 'Create an account'}</Link>
                : <Link  to={'/login'} className="sign-link">{locale === 'id' ? 'Aku sudah memiliki akun': 'I\'m already member'}</Link> 
            }
        </div>
    )
}

AuthImage.propTypes = {
    img: PropTypes.string
}

export default AuthImage;