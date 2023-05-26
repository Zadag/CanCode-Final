import { useState } from "react";
import "./App.css";
import SearchPage from "./components/SearchPage";
import NavBar from "./components/NavBar";

function App() {
  const [savedImages, setSavedImages] = useState([]);
  const [searchImages, setSearchImages] = useState([]);

  console.log(savedImages);
  return (
    <>
      <h1>Gif Collection</h1>
      <NavBar />
      <SearchPage
        savedImages={savedImages}
        saveImage={setSavedImages}
        searchImages={searchImages}
        setSearchImages={setSearchImages}
      />
    </>
  );
}

export default App;
