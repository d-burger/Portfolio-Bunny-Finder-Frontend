import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchToolShelters = ({ setShelterZip, fetchShelters }) => {
  const inputTextHandler = (e) => {
    setShelterZip(e.target.value.toString());
  };
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      fetchShelters();
    }
  };
  return (
    <div className="search-shelter">
      <div className="search-title">
        <span className="kaninchen">Tierheime</span> in Ihrer Nähe
      </div>

      <div className="search-form">
        <input
          placeholder="Postleitzahl ..."
          onChange={inputTextHandler}
          onKeyPress={handleKeypress}
        />
        <button className="submitBtn btn-effect" onClick={fetchShelters}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchToolShelters;
