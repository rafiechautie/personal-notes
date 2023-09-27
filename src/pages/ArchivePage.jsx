import React from "react";
import { getArchivedNotes } from "../utils/api";
import { useSearchParams } from 'react-router-dom';
import SearchInput from "../components/SearchInput";
import NoteList from "../components/NoteList";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function ArchivePage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || '';
    });
    const { locale } = React.useContext(LocaleContext)

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
            <h3 className="text-archive">
                {
                    locale === 'id'
                    ? 'Catatan Arsip'
                    : 'Archive Notes'
                }
            </h3>
            <SearchInput  keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {
                filteredNotes.length > 0 
                ? <NoteList notes={filteredNotes}/>
                : <p>
                    {
                        locale === 'id'
                        ? 'Catatan yang disimpan tidak ada'
                        : 'There are no archive notes'
                    }
                </p>
            }
            <Link to={'/add'} className="floatAdd">
                {
                    locale === 'id'
                    ? 'Tambah'
                    : 'Add'
                }
            </Link>
        </> 
    )
}


export default ArchivePage;