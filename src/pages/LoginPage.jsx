import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom"
import { login } from "../utils/api";
import LoginInput from "../components/LoginInput";
import AuthImage from "../components/AuthImage";

function LoginPage({ loginSuccess }){
    const navigate = useNavigate();
    
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
                        <h2 className="form-title">Sign In</h2>
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