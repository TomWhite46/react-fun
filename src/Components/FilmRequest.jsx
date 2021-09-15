import { useState } from "react";

import Films from './Films';

const FilmRequest = () => {

    const [searchTerm, setSearchTerm] = useState("");


    const runSearch = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.search.value);
            
        };


    return (
        <>
            <form onSubmit={(e)=>runSearch(e)}>
                <label for="search">Search films:</label>
                <input type="text" id="search" name="search"></input>
                <button>Search</button>
            </form>
            <Films searchTerm={searchTerm}/>
        </>
    )
};

export default FilmRequest;