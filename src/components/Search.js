const Search = () => {
    const newLocal = "Enter an address, ZIP, neighbo...";
    return (
        <header>
            <h2 className="header__title"></h2>
            <input
                type="text"
                className="header__search"
                placeholder={newLocal}
            />
        </header>
    );
}

export default Search;