function AchivedButton({ id, onArchived, isArchived} ){
    return <button className="green" onClick={() => onArchived(id)} >{isArchived ? "Aktif" : "Arsip"}</button>
}

export default AchivedButton;