/* eslint-disable react/prop-types */
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";

const SearchImage = ({ imageObj }) => {
  return (
    <div className="image-container">
      <img className="add-or-remove" src={plus} />
      <img
        className={"giphy"}
        key={imageObj.id}
        src={imageObj.images.downsized.url}
      />
    </div>
  );
};

export default SearchImage;
