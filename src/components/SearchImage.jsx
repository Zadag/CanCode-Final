/* eslint-disable react/prop-types */
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";

const SearchImage = ({ imageObj, saveImage, savedImages }) => {
  console.log("loading searchimage");
  const handleAdd = () => {
    saveImage([...savedImages, imageObj]);
  };

  const handleDelete = () => {
    const newImages = savedImages.filter((image) => image.id !== imageObj.id);
    saveImage(newImages);
  };

  const verifyIfImageIsSaved = () => {
    const matches = savedImages.find((image) => {
      return image.id === imageObj.id;
    });

    if (matches) {
      return (
        <img
          className="add-or-remove"
          src={minus}
          role="button"
          onClick={handleDelete}
        />
      );
    } else {
      return (
        <img
          className="add-or-remove"
          src={plus}
          role="button"
          onClick={handleAdd}
        />
      );
    }
  };

  console.log("check func", verifyIfImageIsSaved());

  return (
    <div className="image-container">
      {verifyIfImageIsSaved()}

      <img
        className={"giphy"}
        key={imageObj.id}
        src={imageObj.images.downsized.url}
      />
    </div>
  );
};

export default SearchImage;
