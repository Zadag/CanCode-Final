/* eslint-disable react/prop-types */
import { useState } from "react";
import gyfKey from "../apikey";

const Search = ({ setSearchImages }) => {
  const [searchInput, setSearchInput] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSearch = async (e, searchInput) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${gyfKey}&q=${searchInput}&limit=25&offset=0&rating=g&lang=en`
      );
      const data = await res.json();
      setSearchImages(data.data);
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      {hasError ? <p>Something went wrong</p> : <></>}
      <form onSubmit={(e) => handleSearch(e, searchInput)}>
        <input
          id="search-bar"
          placeholder="Search for a gif"
          onChange={handleChange}
          value={searchInput}
        />
      </form>
    </>
  );
};

export default Search;
