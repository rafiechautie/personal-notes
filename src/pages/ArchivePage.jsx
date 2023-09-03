import React from "react";
import PropTypes from 'prop-types';
import { getArchivedNotes } from "../utils/model";
import { useSearchParams } from 'react-router-dom';
import SearchInput from "../components/SearchInput";
import NoteList from "../components/NoteList";
import { Link } from "react-router-dom";
import AddButton from "../components/AddButton";
import { FaPlus } from "react-icons/fa6";

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
   
    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class ArchivePage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getArchivedNotes(),
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
                <h3 className="text-archive">Catatan Arsip</h3>
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

ArchivePage.PropTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default ArchivePageWrapper;