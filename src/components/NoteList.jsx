import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

// function NoteList(){
//     return this.props.notes.length > 0 ? (
//         <section className="notes-lists">
//             {
//                 //{/* perulangan menggunakan map untuk memanggil componen item sebanyak data contact yang diberikan */}
//                 this.props.notes.map((note) => (
//                     <NoteItem
//                         key={note.id}
//                         id={note.id}
//                         onDelete={this.props.onDelete}
//                         onArchived = {this.props.onArchived}
//                         {...note}
//                      />
//                 ))
//             }
//         </section>
//     ) : (
//         <p>Tidak ada catatan</p>
//     )
// }

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