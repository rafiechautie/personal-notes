function DeleteButton({ id, onDelete} ){
    return <button className="red" onClick={() => onDelete(id)}>Delete</button>
}

export default DeleteButton;