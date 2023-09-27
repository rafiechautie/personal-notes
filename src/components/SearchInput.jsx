import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import React from 'react';

function SearchInput({keyword, keywordChange}){
    const { locale } = React.useContext(LocaleContext)
    return(
        <section className="search-section">
            <input type="text"
             placeholder={
                locale === 'id'
                ? 'Cari catatanmu...'
                : 'Search your notes...'
             }
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