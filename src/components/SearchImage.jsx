/* eslint-disable react/prop-types */
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";

const SearchImage = ({ imageObj, saveImage, savedImages }) => {
  console.log(savedImages, "savedimages");
  return (
    <div className="image-container">
      <img
        className="add-or-remove"
        src={plus}
        role="button"
        onClick={() => saveImage([...savedImages, imageObj])}
      />
      <img
        className={"giphy"}
        key={imageObj.id}
        src={imageObj.images.downsized.url}
      />
    </div>
  );
};

export default SearchImage;
