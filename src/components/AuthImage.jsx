import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function AuthImage({img}){
    return(
        <div className="signin-image">
            <figure><img src={img} alt="sing up image"/></figure>
            {
                img === "signin-image.jpg"
                ? <Link  to={'/register'}>{"Create an account"}</Link>
                : <Link  to={'/login'}>{"I'm already member"}</Link> 
            }
        </div>
    )
}

AuthImage.propTypes = {
    img: PropTypes.string
}

export default AuthImage;