/* eslint-disable react/prop-types */
import SearchImage from "./SearchImage";

const SearchResults = ({ imageObjs, saveImage, savedImages }) => {
  return (
    <>
      <div id="search-results">
        {imageObjs.map((image) => {
          return (
            <SearchImage
              key={image.id}
              imageObj={image}
              saveImage={saveImage}
              savedImages={savedImages}
            />
          );
        })}
      </div>
    </>
  );
};

export default SearchResults;
