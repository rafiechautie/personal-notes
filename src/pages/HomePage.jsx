import React from "react";
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import NoteList from "../components/NoteList";
import { FaPlus } from "react-icons/fa6";
import AddButton from "../components/AddButton"
import { getActiveNotes } from "../utils/model"
import SearchInput from "../components/SearchInput";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
          return {
            keyword,
          }
        });
        this.props.keywordChange(keyword);
      }

    render(){

        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return(
            <>
                <h3 className="text-archive">Catatan Aktif</h3>
                <SearchInput  keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                {
                    notes.length > 0 
                    ? <NoteList notes={notes}/>
                    : <p>Catatan Tidak ada</p>
                }
                <Link to={'/add'}>
                    <AddButton icon={<FaPlus />}/>
                </Link>
            </> 
        )
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;