import React from "react";
import PropTypes from 'prop-types';

class FormAdd extends React.Component{
    constructor(props){
        super(props)

        //inisiasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventeHandler = this.onBodyChangeEventeHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(e){
        const maxChar = 50
        this.setState(() => {
            return{
                title: e.target.value.slice(0, maxChar),
            }
        });
    }

    onBodyChangeEventeHandler(e){
        this.setState(() => {
            return{
                body: e.target.value,
            }
        })
    }

    onSubmitEventHandler(e){
        e.preventDefault();
        this.props.addNote(this.state);
    }

    
    render(){
        const maxChar = 50
        return(
            <section className="input-section">
                <h2>Buat Catatan</h2>
                <p className="maximal-text">Sisa Karakter: {maxChar - this.state.title.length}</p>
                <form className="form-add" onSubmit={this.onSubmitEventHandler}>
                    <div className="form-group">
                        <input type="text" placeholder="ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    </div>
                    <div className="form-group">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Tuliskan Catatanmu di sini..." onChange={this.onBodyChangeEventeHandler} value={this.state.body}></textarea>
                    </div>
                    <button>Buat</button>
                </form>
            </section>
        )
    }
}

FormAdd.propTypes = {
    addNote: PropTypes.func.isRequired,
  }

export default FormAdd;