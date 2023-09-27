import PropTypes from 'prop-types';
import { GoArchive } from "react-icons/go";

function ArchivedButton({ id, onArchive, onUnarchive, type} ){

    console.log(type);

    if(type === 'archive'){
        return(
            <button className="floatArchive" type={type} onClick={() => onArchive(id)} >{ <GoArchive size={25} />}</button>
        )
    }else{
        return(
            <button className="floatArchive" type={type} onClick={() => onUnarchive(id)} >{ <GoArchive size={25} />}</button>
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