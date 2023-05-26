/* eslint-disable react/prop-types */
import SearchImage from "./SearchImage";

const SearchResults = ({ imageObjs }) => {
  return (
    <>
      <div id="search-results">
        {imageObjs.map((image) => {
          return <SearchImage key={image.id} imageObj={image} />;
        })}
      </div>
    </>
  );
};

export default SearchResults;
