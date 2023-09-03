import PropTypes from 'prop-types';
import NoteItemBody from "./NoteItemBody";
import { Link } from "react-router-dom";

function NoteItem({title, body, createdAt, id}){
    return(
        <div className="notes">
            <Link to={`/notes/${id}`}><NoteItemBody title={title} body={body} createdAt={createdAt}/></Link>
        </div>
    )
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    body:PropTypes.string.isRequired,
    createdAt:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default NoteItem;