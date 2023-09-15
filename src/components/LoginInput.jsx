import PropTypes from 'prop-types';
import { FiMail, FiLock } from "react-icons/fi";
import useInput from '../hooks/useInput';

function LoginInput({ login }){
    const [email, handleEmailChange] = useInput('');
    const [password, handlePasswordChange] = useInput('');

    const onSubmitHandler = (e) => {
        e.preventDefault();

        login({email, password})
    }
    
    return(
        <>
        <form onSubmit={onSubmitHandler} className="register-form" id="login-form">
            <div className="form-group">
                    <label><FiMail /></label>
                    <input 
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your Email"
                        required
                        />
            </div>
            <div className="form-group">
                    <label htmlFor="your_pass">< FiLock /></label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        required
                        />
            </div>
            <div className="form-group form-button">
                <button className='form-submit'>Login</button>
            </div>
        </form>
        
        </>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired
}

export default LoginInput;