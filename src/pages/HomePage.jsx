import React from "react";
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";
import { FaPlus } from "react-icons/fa6";
import AddButton from "../components/AddButton"
import { getActiveNotes } from "../utils/api"
import SearchInput from "../components/SearchInput";
// import LocaleContext, { LocaleConsumer } from '../contexts/LocaleContext';
// import { ToastContainer } from "react-toastify";

function HomePage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || '';
    });

    // const { locale } = React.useContext(LocaleContext)

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
        return <p>Loading...</p>;
    }

    return(
        <>
            <h3 className="text-archive">Catatan Aktif</h3>
            <SearchInput  keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {
            filteredNotes.length > 0 
                ? <NoteList notes={filteredNotes}/>
                : <p>Catatan Tidak ada</p>
            }
            {/* <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                /> */}
            <Link to={'/add'}>
                 <AddButton icon={<FaPlus />}/>
            </Link>
        </> 
    )

}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default HomePage;