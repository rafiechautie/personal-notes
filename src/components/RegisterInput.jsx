import useInput from "../hooks/useInput"
import PropTypes from 'prop-types';
import React from "react";
import { FaPerson} from "react-icons/fa6";
import { FiMail, FiLock } from "react-icons/fi";

function RegisterInput({ register }){
    const [name, handleNameChange] = useInput('')
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');
    const [checkConfirmPassword, setCheckConfirmPassword] = React.useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(password === confirmPassword){
            register({ name, email, password});
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
                        placeholder="Your Name" 
                        value={name} 
                        onChange={handleNameChange} 
                        required/>
            </div>
            <div className="form-group">
                    <label htmlFor="email">< FiMail /></label>
                    <input 
                        type="email" 
                        placeholder="Your Email" 
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
                        placeholder="Password"
                        required
                        />
            </div>
            <div className="form-group">
                    <label htmlFor="re-pass">< FiLock /></label>
                    <input 
                        className={`confirm-password ${checkConfirmPassword}`}
                        type="password" 
                        placeholder="Repeat your password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        onBlur={onCheckConfirmPasswordHandler}
                        onFocus={onCheckConfirmPasswordHandler}
                        onInput={onInputConfirmPasswordHandler}
                        required
                        />
            </div>
            <div className="form-group form-button">
                <button className="form-submit">Register</button>
            </div>
        </form>
    )
}

RegisterInput.proptypes = {
    register: PropTypes.func.isRequired
}

export default RegisterInput;