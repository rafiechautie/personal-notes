import React from "react";
import NoteItem from "./NoteItem";

class NoteList extends React.Component{
    render(){
        return this.props.notes.length > 0 ? (
            <section className="notes-lists">
                {
                    //{/* perulangan menggunakan map untuk memanggil componen item sebanyak data contact yang diberikan */}
                    this.props.notes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            onDelete={this.props.onDelete}
                            onArchived = {this.props.onArchived}
                            {...note}
                         />
                    ))
                }
            </section>
        ) : (
            <p>Tidak ada catatan</p>
        )
    }
}

export default NoteList;