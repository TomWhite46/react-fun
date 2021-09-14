const Search =({filter, setFilter}) => {
    return (
        <>
            <label for="search">Search: </label>
            <input type="text" id="search" onChange={(e) => setFilter(e.target.value)}/>
        </>
    )
}

export default Search;