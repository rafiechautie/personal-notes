import useInput from "../hooks/useInput"
import PropTypes from 'prop-types';
import React from "react";
import { FaPerson} from "react-icons/fa6";
import { FiMail, FiLock } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";
import Swal from "sweetalert2";

function RegisterInput({ register }){
    const [name, handleNameChange] = useInput('')
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');
    const [checkConfirmPassword, setCheckConfirmPassword] = React.useState('');
    const { locale } = React.useContext(LocaleContext)

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(password === confirmPassword){
            register({ name, email, password});
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Anda tidak cocok',
            });
            return;
        }
    }

    const onInputConfirmPasswordHandler = () => {
        setCheckConfirmPassword('correct');
    }

    const onCheckConfirmPasswordHandler = () => {
        if(confirmPassword.length >= 1 && password !== confirmPassword){
            setCheckConfirmPassword('wrong');
        }else{
            setCheckConfirmPassword('correct');
        }
    }


    return(
        <form onSubmit={onSubmitHandler} className="register-form" id="register-form">
            <div className="form-group">
                    <label htmlFor="name">< FaPerson/></label>
                    <input 
                        type="text" 
                        placeholder={locale === 'id' ? 'Masukkan namamu' : 'Input you\'re name'} 
                        value={name} 
                        onChange={handleNameChange} 
                        required/>
            </div>
            <div className="form-group">
                    <label htmlFor="email">< FiMail /></label>
                    <input 
                        type="email" 
                        placeholder={locale === 'id' ? 'Masukkan emailmu' : 'Input you\'re mail'} 
                        value={email} 
                        onChange={handleEmailChange} 
                        required/>
            </div>
            <div className="form-group">
                    <label htmlFor="pass">< FiLock /></label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder={locale === 'id' ? 'Masukkan passwordmu': 'Input you\'re password'}
                        required
                        />
            </div>
            <div className="form-group">
                    <label htmlFor="re-pass">< FiLock /></label>
                    <input 
                        className={`confirm-password ${checkConfirmPassword}`}
                        type="password" 
                        placeholder={locale === 'id' ? 'Konfirmasi Password' : 'Confirmation Password'}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        onBlur={onCheckConfirmPasswordHandler}
                        onFocus={onCheckConfirmPasswordHandler}
                        onInput={onInputConfirmPasswordHandler}
                        required
                        />
            </div>
            <div className="form-group form-button">
                <button className="form-submit">{locale === 'id' ? 'Daftar': 'Register'}</button>
            </div>
        </form>
    )
}

RegisterInput.proptypes = {
    register: PropTypes.func.isRequired
}

export default RegisterInput;