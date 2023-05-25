import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input placeholder="Search for a gif" onChange={handleChange} />
    </form>
  );
};

export default Search;
