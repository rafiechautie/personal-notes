import React from "react";
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/api"
import SearchInput from "../components/SearchInput";
import LocaleContext from "../contexts/LocaleContext";

function HomePage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || '';
    });

    const { locale } = React.useContext(LocaleContext)

    React.useEffect(() => {
        const getData = async() => {
            const { data } = await getActiveNotes();
            setNotes(data);
        }

        getData();

        return () => {
            setNotes(null)
        }
    }, []);

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => (
        note.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    ));

    if (notes === null) {
        return null;
    }

    return(
        <>
            <h3 className="text-archive">
                {
                    locale === 'id'
                    ? 'Catatan Aktif'
                    : 'Active Notes'
                }
            </h3>
            <SearchInput  keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {
            filteredNotes.length > 0 
                ? <NoteList notes={filteredNotes}/>
                : <p>Catatan Tidak ada</p>
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



export default HomePage;