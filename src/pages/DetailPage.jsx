import React from 'react';
import PropTypes from 'prop-types';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/model';
import DetailNoteItem from '../components/DetailNoteItem';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

function DetailPageWrapper(){
    const { id } = useParams();
    const navigate = useNavigate();

    function onDeleteNoteHandler(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to reverd this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if(result.isConfirmed){
                deleteNote(id);
                navigate('/');
                Swal.fire({
                    icon: 'success',
                    title: 'Your note has been deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    function onArchiveNoteHandler(id) {
        archiveNote(id);
        navigate('/');
    }
    
    function onUnArchiveNoteHandler(id) {
        unarchiveNote(id);
        navigate('/archive');
    }

    return(
        <DetailPage
            id={id}
            onDelete={onDeleteNoteHandler}
            onArchive={onArchiveNoteHandler}
            onUnarchive={onUnArchiveNoteHandler} />
    )
}

class DetailPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            notes: getNote(props.id)
        }
    }

    render(){
        if(this.state.notes === null){
            return <p>Notes is not found</p>
        }

        return(
            <section className='detail-note'>
                <DetailNoteItem
                    onDelete={this.props.onDelete} 
                    onArchive={this.props.onArchive}
                    onUnarchive={this.props.onUnarchive} 
                    {...this.state.notes}/>
            </section>
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
}

export default DetailPageWrapper;