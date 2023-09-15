import React from "react";
import PropTypes from 'prop-types';
import { getArchivedNotes } from "../utils/api";
import { useSearchParams } from 'react-router-dom';
import SearchInput from "../components/SearchInput";
import NoteList from "../components/NoteList";
import { Link } from "react-router-dom";
import AddButton from "../components/AddButton";
import { FaPlus } from "react-icons/fa6";

function ArchivePage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || '';
    });

    React.useEffect(() => {
        const getData = async () => {
            const { data } = await getArchivedNotes();
            setNotes(data);
        }
        getData();
    }, []);

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
        setSearchParams({keyword});
    }

    const filteredNotes = notes.filter((note) => (
        note.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    ));

    return(
        <>
            <h3 className="text-archive">Catatan Arsip</h3>
            <SearchInput  keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {
                filteredNotes.length > 0 
                ? <NoteList notes={filteredNotes}/>
                : <p>Catatan yang disimpan tidak ada</p>
            }
            <Link to={'/add'}>
                <AddButton icon={<FaPlus />}/>
            </Link>
        </> 
    )
}

ArchivePage.PropTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default ArchivePage;