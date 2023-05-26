/* eslint-disable react/prop-types */
import Search from "./Search";
import SearchResults from "./SearchResults";

const SearchPage = ({
  setSearchImages,
  searchImages,
  saveImage,
  savedImages,
}) => {
  return (
    <>
      <h1>Gif Collection</h1>
      <Search setSearchImages={setSearchImages}></Search>
      <SearchResults
        imageObjs={searchImages}
        saveImage={saveImage}
        savedImages={savedImages}
      />
    </>
  );
};

export default SearchPage;
