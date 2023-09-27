import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import DeleteButton from './DeleteButton'
import ArchiveButton from './ArchiveButton'


function DetailNoteItem({id, title, createdAt, body, archived, onDelete, onArchive, onUnarchive}){


    return(
        <div className="notes-detail">
            <h2>{title}</h2>
            <small>{showFormattedDate(createdAt)}</small>
            <p>{body}</p>
            <div className="float-button-group">
                <DeleteButton id={id} onDelete={onDelete}/>
                {
                    archived
                    ? <ArchiveButton id={id} type='unArchive' onUnarchive={onUnarchive} />
                    : <ArchiveButton id={id} type='archive' onArchive={onArchive}/>
                }
            </div>
        </div>
    )
}

DetailNoteItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    body: PropTypes.string,
    archived: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

export default DetailNoteItem;