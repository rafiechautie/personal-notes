import PropTypes from 'prop-types';
import { FaDeleteLeft } from "react-icons/fa6";

function DeleteButton({ id, onDelete} ){
    return <button className="floatDelete" onClick={() => onDelete(id)}>{ <FaDeleteLeft size={25} />}</button>
}

DeleteButton.propTypes = {
    id: PropTypes.string,
    onDelete: PropTypes.func,
}

export default DeleteButton;