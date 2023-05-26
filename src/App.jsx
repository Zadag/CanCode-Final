import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import SearchPage from "./components/SearchPage";

function App() {
  const [savedImages, setSavedImages] = useState([]);
  const [searchImages, setSearchImages] = useState([]);

  console.log(savedImages);
  return (
    <>
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
