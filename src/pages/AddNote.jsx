import BackButton from "../components/BackButton";
import FormAdd from "../components/FormAdd";
import { addNote } from "../utils/model";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

function AddNote(){
    const navigate = useNavigate();

    function onAddNoteHandler(note){
        addNote(note)
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