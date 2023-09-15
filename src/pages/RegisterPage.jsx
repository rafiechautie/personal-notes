import { useNavigate } from "react-router-dom"
import RegisterInput from "../components/RegisterInput";
import AuthImage from "../components/AuthImage";
import { register } from "../utils/api";

function RegisterPage(){
    const navigate = useNavigate();
    // const { locale } = React.useContext(Locale)

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
                        <h2 className="form-title">Sign up</h2>
                        <RegisterInput register={onRegisterHandler} />
                    </div>
                    <AuthImage img="signup-image.jpg"/>
                </div>
            </section>
        </>
    )
}

export default RegisterPage;