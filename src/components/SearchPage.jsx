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
