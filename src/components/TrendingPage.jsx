import { useEffect } from "react";
import SearchImage from "./SearchImage";
import { useState } from "react";

const TrendingPage = ({ savedImages, saveImage }) => {
  const [trendingImages, setTrendingImages] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=t2D5o8XJv6OetjD1hhxtktx6ove10WdA&limit=25&rating=g"
      );
      const data = await res.json();
      setTrendingImages(data.data);
      console.log(data.data);
    };
    dataFetch();
  }, []);

  return trendingImages.map((image) => {
    return (
      <SearchImage
        key={image.id}
        imageObj={image}
        saveImage={saveImage}
        savedImages={savedImages}
      />
    );
  });
};

export default TrendingPage;
