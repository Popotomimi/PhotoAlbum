import React from "react";
import SearchbarProps from "../interfaces/SearchbarProps";

const Searchbar: React.FC<SearchbarProps> = ({
  setQuery,
  setCategory,
  setActivateSearch,
}) => {
  const categorys = ["Nature", "People", "Technology", "Animals", "Sports"];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Photos..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setActivateSearch(true)}>Search</button>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
          setActivateSearch(true);
        }}>
        {categorys.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Searchbar;
