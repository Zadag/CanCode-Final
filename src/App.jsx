import { useState } from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import NavBar from "./components/NavBar";
import CollectionPage from "./components/CollectionPage";
import TrendingPage from "./components/TrendingPage";

function App() {
  const [savedImages, setSavedImages] = useState([]);
  const [searchImages, setSearchImages] = useState([]);
  const [clicked, setClicked] = useState("search-btn");

  console.log(savedImages);
  return (
    <>
      <h1>Gif Collection</h1>
      <NavBar setClicked={setClicked} />
      {clicked === "search-btn" ? (
        <SearchPage
          savedImages={savedImages}
          saveImage={setSavedImages}
          searchImages={searchImages}
          setSearchImages={setSearchImages}
        />
      ) : clicked === "collection-btn" ? (
        <CollectionPage saveImage={setSavedImages} savedImages={savedImages} />
      ) : clicked === "trending-btn" ? (
        <TrendingPage saveImage={setSavedImages} savedImages={savedImages} />
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default App;
