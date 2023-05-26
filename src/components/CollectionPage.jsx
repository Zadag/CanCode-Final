/* eslint-disable react/prop-types */
import minus from "../assets/minus.png";

const CollectionPage = ({ savedImages, saveImage }) => {
  const handleDelete = (clickedImage) => {
    const newImages = savedImages.filter(
      (image) => image.id !== clickedImage.id
    );
    saveImage(newImages);
  };

  return (
    <div id="collection-container">
      {savedImages.map((image) => {
        return (
          <div className="img-container" key={image.id}>
            <img
              className="add-or-remove"
              src={minus}
              role="button"
              onClick={() => handleDelete(image)}
            />
            <img className={"giphy"} src={image.images.downsized.url} />
          </div>
        );
      })}
    </div>
  );
};

export default CollectionPage;
