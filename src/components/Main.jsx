import React from "react";
import { getInitialData } from "../utils/model";
import FormAdd from "./FormAdd";
import NoteList from "./NoteList";
import SearchInput from "./SearchInput";

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            search: ''
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes})
    }

    onAddNoteHandler({title, body}){
        const date = new Date().toISOString();
        this.setState((prevState) => {
            return{
                notes : [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: date,
                        archived: false
                    }
                ]
            }
        });
    }

    onSearchEventHandler(event){
        this.setState(() => {
            return{
                search: event.target.value
            }
        })
    }

    onArchiveEventHandler(id){
        const archiveNote = this.state.notes.map((note) => (note.id === id ? {...note, archived: !note.archived} : note));
        this.setState({notes: archiveNote});
        console.log(archiveNote);
    }

    render(){
        const search = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));

        const archiveNotes = search.filter((note) => {
            return note.archived === false;
        });

        const archivedNotes = search.filter((note) => {
            return note.archived === true;
        });
        return(
            <main>
                <FormAdd addNote={this.onAddNoteHandler}/>
                <SearchInput onSearch={this.onSearchEventHandler}/>
                <h3 className="text-archive">Catatan Aktif</h3>
                <NoteList notes={archiveNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveEventHandler}/>
                <h3 className="text-archive">Arsip</h3>
                <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchiveEventHandler}/>
            </main>
        )
    }
}

export default Main;