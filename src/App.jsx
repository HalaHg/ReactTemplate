import { Header } from "./components/Header";
import { Resource } from "./components/Resource";
import { Page } from "./components/Page";
import { Grid } from "./components/Grid";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import "./styles/App.css";
import { dataResources, dataGrid, pagesContent } from "./data";


function App() {
  const [pages, setPages] = useState(pagesContent);

  // function capSpace(name) { 
  //   name.replace(/([A-Z]+)/g, (match) => ` ${match}`).trim();
  // }

  function handleSelect(selected) {
    setPages((pages) => {
      pages.find((x) => x.order === 1).order = selected.order;
      pages.find((x) => x.name === selected.name).order = 1;

       return [...pages.sort((a, b) => a.order - b.order)]}
     );
  }

  function addNew(newContent) {
    console.log(`Added new content: ${newContent.name}`);
  }

  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Page onAdd={addNew} onSelect={handleSelect} contents={pages} />}
          />
          <Route path="/resource" element={<Resource dataResources={dataResources} />} />
          <Route path="/Grid" element={<Grid dataGrid={dataGrid} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;