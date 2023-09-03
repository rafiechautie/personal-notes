import PropTypes from 'prop-types';

function BackButton({icon}){
    return(
        <button className="floatBack">
            {icon}
        </button>
    )   
}

BackButton.propTypes = {
    icon: PropTypes.element.isRequired,
}


export default BackButton;