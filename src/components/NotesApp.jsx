import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

class NotesApp extends React.Component{
    

    render(){
        return(
            <>
                <Header/>
                <Main />
                <Footer/>
            </>
        )
    }
}

export default NotesApp;