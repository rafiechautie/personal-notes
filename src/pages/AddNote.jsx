import { toast } from "react-toastify";
import BackButton from "../components/BackButton";
import FormAdd from "../components/FormAdd";
import { addNote } from "../utils/api";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

function AddNote(){
    const navigate = useNavigate();

    const onAddNoteHandler = async (note) => {
        await addNote(note);
        toast.success('1 catatan ditambahkan', {
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

    return(
        <>
            <Link to={'/'}>
                <BackButton icon={<FaArrowLeft />}/>
            </Link>
            <FormAdd addNote={onAddNoteHandler}/>
        </>
    )
}

export default AddNote;