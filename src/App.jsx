import { useState } from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import NavBar from "./components/NavBar";
import CollectionPage from "./components/CollectionPage";

function App() {
  const [savedImages, setSavedImages] = useState([]);
  const [searchImages, setSearchImages] = useState([]);
  const [clicked, setClicked] = useState("Search");

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
      ) : (
        <CollectionPage saveImage={setSavedImages} savedImages={savedImages} />
      )}
    </>
  );
}

export default App;
