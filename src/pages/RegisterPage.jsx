import React from "react";
import LocaleContext from '../contexts/LocaleContext';
import { useNavigate } from "react-router-dom"
import RegisterInput from "../components/RegisterInput";
import AuthImage from "../components/AuthImage";
import { register } from "../utils/api";



function RegisterPage(){
    const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext)

    const onRegisterHandler = async (user) => {
        const { error } = await register(user);

        if(!error){
            navigate('/login');
        }
    }

    return(
        <>
            <section className="signup">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">
                            {
                                locale === 'id'
                                ? 'Halaman Register'
                                : 'Sign Up Page'
                            }
                        </h2>
                        <RegisterInput register={onRegisterHandler} />
                    </div>
                    <AuthImage img="signup-image.jpg"/>
                </div>
            </section>
        </>
    )
}

export default RegisterPage;