import PropTypes from 'prop-types';
import { GoTrash } from "react-icons/go";

function DeleteButton({ id, onDelete} ){
    return <button className="floatDelete" onClick={() => onDelete(id)}>{ <GoTrash size={25} />}</button>
}

DeleteButton.propTypes = {
    id: PropTypes.string,
    onDelete: PropTypes.func,
}

export default DeleteButton;