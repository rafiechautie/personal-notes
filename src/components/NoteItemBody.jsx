function NoteItemBody ({title, body, createdAt}){
    return(
        <>
            <h4 className="title-notes">{title}</h4>
            <small className="time-notes">{createdAt}</small>
            <p className="content-notes">{body}</p>
        </>
    )
}
export default NoteItemBody;