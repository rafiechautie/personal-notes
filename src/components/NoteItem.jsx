import DeleteButton from "./DeleteButton";
import ArchivedButton from "./ArchiveButton";
import NoteItemBody from "./NoteItemBody";

function NoteItem({title, body, createdAt, id, onDelete, onArchived, isArchived}){
    return(
        <div className="notes">
            <NoteItemBody title={title} body={body} createdAt={createdAt}/>
            <div className="button-group">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchivedButton id={id} onArchived={onArchived} isArchived={isArchived}/>
            </div>
        </div>
    )
}

export default NoteItem;