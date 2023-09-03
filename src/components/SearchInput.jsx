import PropTypes from 'prop-types';

function SearchInput({keyword, keywordChange}){
    return(
        <section className="search-section">
            <input type="text"
             placeholder="Cari Bukumu..."
             className="input-search"
             value={keyword}
             onChange={(event) => keywordChange(event.target.value)}/>
        </section>
    )
}

SearchInput.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchInput;