import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchTool = ({ fetchBunnies, setZip }) => {
  const inputTextHandler = (e) => {
    setZip(e.target.value.toString());
  };
  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      fetchBunnies();
    }
  };
  return (
    <div className="search">
      <div className="search-title">
        <span className="kaninchen">Kaninchen</span> in Ihrer Nähe
      </div>

      <div className="search-form">
        <input
          placeholder="Postleitzahl ..."
          onChange={inputTextHandler}
          onKeyPress={handleKeypress}
        />
        <button className="submitBtn btn-effect" onClick={fetchBunnies}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchTool;
