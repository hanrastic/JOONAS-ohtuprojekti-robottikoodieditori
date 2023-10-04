import "../index.css";

const Searchbar = ({ searchTerm, handleSearchChange, translations }) => {
    console.log("Translations in Searchbar:", translations);
    return (
        <div className="search-bar" id='searchbar'>
            <input
                type="text"
                placeholder={translations.searchPlaceholder}  /* Here the placeholder is now dynamic */
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    )
}

export default Searchbar;