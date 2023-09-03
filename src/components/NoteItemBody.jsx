import PropTypes from 'prop-types';

function NoteItemBody ({title, body, createdAt}){
    return(
        <>
            <h4 className="title-notes">{title}</h4>
            <small className="time-notes">{createdAt}</small>
            <p className="content-notes">{body}</p>
        </>
    )
}

NoteItemBody.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
}
export default NoteItemBody;