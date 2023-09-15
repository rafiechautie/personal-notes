import React from 'react';
import PropTypes from 'prop-types';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/api'
// import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/model';
import DetailNoteItem from '../components/DetailNoteItem';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function DetailPage(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        const getData = async(id) => {
            const { data } = await getNote(id);
            setNotes(data)
        }
        getData(id)
    }, [id]);


    const onDeleteNoteHandler = async (id) => {
        Swal.fire({
            title: 'Kamu yakin ingin hapus catatan ini?',
            text: "Kamu bisa batalin lohh kalo kamu masih peduli!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#28a745',
            confirmButtonText: 'Gak peduli',
            cancelButtonText: 'Aku masih peduli',
        }).then(async (result) => {
            if(result.isConfirmed){
                await deleteNote(id)
                navigate('/');
                Swal.fire({
                    icon: 'success',
                    title: 'Kenangan sudah terhapus, jangan sedih aku selalu disisimu!',
                    showConfirmButton: false,
                    timer: 4000,
                });
            }
        })
    }

    const onArchiveNoteHandler = async(id) => {
        await archiveNote(id);
        toast.success('1 catatan difavoritkan', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
        navigate('/');
    }

    const onUnarchiveNoteHandler = async(id) => {
        await unarchiveNote(id);
        navigate('/archived');
    }

    if(notes === undefined || notes === null){
        return<p>Catatan tidak ditemukan</p>
    }

    return(
        <section className='detail-note'>
        <DetailNoteItem
            onDelete={onDeleteNoteHandler} 
            onArchive={onArchiveNoteHandler}
            onUnarchive={onUnarchiveNoteHandler} 
            {...notes}/>
        </section>
    )

}


DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
    onUnarchive: PropTypes.func.isRequired,
}

export default DetailPage;