import React from "react";
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput'
import LocaleContext from "../contexts/LocaleContext";

function FormAddNote({ addNote }){
    const [title, handleTitleChange] = useInput('');
    const [body, handleBodyChange ] = useInput('');
    const { locale } = React.useContext(LocaleContext)
    const maxCharacterCount = 50;

    

    const onSubmitEventHandler = (e) => {
      e.preventDefault();
      addNote({
        title, body
      });
    }

    return(
      <section className="input-section">
          <h2>
            {
              locale === 'id'
              ? 'Buat Catatan'
              : 'Create Note'
            }
          </h2>
            <p className="maximal-text">Sisa Karakter: {maxCharacterCount - title.length}</p>
            <form className="form-add" onSubmit={onSubmitEventHandler}>
                <div className="form-group">
                    <input 
                    type="text"
                    placeholder={
                      locale === 'id'
                      ? 'Masukkan judul catatanmu...'
                      : 'Input title note...'
                    }
                    value={title}
                    onChange={ (e) =>{
                       const inputValue = e.target.value;
                       if(inputValue.length <= maxCharacterCount){
                          handleTitleChange(e)
                       }
                    }}
                    required
                    />
                </div>
                <div className="form-group">
                    <textarea 
                      cols="30"
                      rows="10" 
                      placeholder={
                        locale === 'id'
                        ? 'Tuliskan catatanmu di sini...'
                        : 'Input you\'re notes here...'
                      } 
                      onChange={handleBodyChange} 
                      value={body}
                      required></textarea>
                </div>
                <button>
                  {
                    locale === 'id'
                    ? 'Tambah Catatan'
                    : 'Add Note'
                  }
                </button>
            </form>
        </section>
    )
}


FormAddNote.propTypes = {
    addNote: PropTypes.func.isRequired,
  }

export default FormAddNote;