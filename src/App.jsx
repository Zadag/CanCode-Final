import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const [savedImages, setSavedImages] = useState([]);
  const [searchImages, setSearchImages] = useState([]);
  console.log(searchImages);

  return (
    <>
      <h1>Gif Collection</h1>
      <Search setSearchImages={setSearchImages}></Search>
      <SearchResults imageObjs={searchImages} />
    </>
  );
}

export default App;
