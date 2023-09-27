import { toast } from "react-toastify";
import FormAdd from "../components/FormAdd";
import { addNote } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";
import { Link, useNavigate } from 'react-router-dom';
import React from "react";


function AddNote(){
    const navigate = useNavigate();
    const { locale } = React.useContext(LocaleContext)

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
            <Link to={'/'} className="floatBack">
            {
                    locale === 'id'
                    ? 'Kembali'
                    : 'Back'
                }
            </Link>
            <FormAdd addNote={onAddNoteHandler}/>
        </>
    )
}

export default AddNote;