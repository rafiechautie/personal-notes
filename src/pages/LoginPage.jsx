import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"
import { login } from "../utils/api";
import LoginInput from "../components/LoginInput";
import AuthImage from "../components/AuthImage";
import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function LoginPage({ loginSuccess }){
    const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext)
    
    async function onLogin({email, password}){
        const {error, data} = await login({email, password})

        if(!error){
            loginSuccess(data)
            navigate('/')
        }
    }

    return(
        <>
            <section className="container-signin">
                <div className="signin-content">
                <AuthImage img="signin-image.jpg" />

                    <div className="signin-form">
                        <h2 className="form-title">
                            {
                                locale === 'id'
                                ? 'Halaman Login'
                                : 'Sign In Page'
                            }
                        </h2>
                        <LoginInput login={onLogin}/>
                    </div>
                </div>
            </section>
        </>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func,
}

export default LoginPage;