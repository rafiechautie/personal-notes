import PropTypes from 'prop-types';
import { FaBoxArchive } from "react-icons/fa6";

function ArchivedButton({ id, onArchive, onUnarchive, type} ){

    console.log(type);

    if(type === 'archive'){
        return(
            <button className="floatArchive" type={type} onClick={() => onArchive(id)} >{ <FaBoxArchive size={25} />}</button>
        )
    }else{
        return(
            <button className="floatArchive" type={type} onClick={() => onUnarchive(id)} >{ <FaBoxArchive size={25} />}</button>
        )
    }
}

ArchivedButton.propTypes = {
    id: PropTypes.string,
    onArchive: PropTypes.func,
    onUnarchive: PropTypes.func,
    type: PropTypes.string
}

export default ArchivedButton;