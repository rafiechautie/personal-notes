import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

function NoteList({notes}){
    return(
        <section className="notes-lists">
            {
                notes.map((note) => (
                <NoteItem key={note.id} {...note} />
            ))
            }
        </section>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList;