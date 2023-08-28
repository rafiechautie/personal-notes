function SearchInput({title, onSearch}){
    return(
        <section className="search-section">
            <input type="text" placeholder="Cari Bukumu..." className="input-search" value={title} onChange={onSearch}/>
        </section>
    )
}

export default SearchInput;