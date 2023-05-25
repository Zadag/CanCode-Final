import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Gif Collection</h1>
      <Search></Search>
    </>
  );
}

export default App;
