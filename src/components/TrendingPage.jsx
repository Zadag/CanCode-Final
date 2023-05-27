import { useEffect } from "react";
import SearchImage from "./SearchImage";
import { useState } from "react";
import gyfKey from "../apikey";

const TrendingPage = ({ savedImages, saveImage }) => {
  const [trendingImages, setTrendingImages] = useState([]);
  const [hasError, setHasError] = useState([false]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${gyfKey}&limit=25&rating=g`
      );
      const data = await res.json();
      setTrendingImages(data.data);
      console.log(data.data);
    };
    try {
      dataFetch();
    } catch (error) {
      console.error(error);
      setHasError(true);
    }
  }, []);

  return hasError ? (
    trendingImages.map((image) => {
      return (
        <SearchImage
          key={image.id}
          imageObj={image}
          saveImage={saveImage}
          savedImages={savedImages}
        />
      );
    })
  ) : (
    <p>Something went wrong</p>
  );
};

export default TrendingPage;
