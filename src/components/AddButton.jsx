import PropTypes from 'prop-types';

function AddButton ({icon}){
    return(
        <button className="floatAdd">
            {icon}
        </button>
    )     
}

AddButton.propTypes = {
    icon: PropTypes.element.isRequired,
}

export default AddButton;