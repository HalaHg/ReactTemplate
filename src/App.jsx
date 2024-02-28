import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Grid } from "./components/Grid";
import { Header } from "./components/Header";
import { Page } from "./components/Page";
import { Resource } from "./components/Resource";
import { dataGrid, dataResources, pagesContent } from "./data";
import "./styles/App.css";


function App() {
  const [pages, setPages] = useState(pagesContent);
  const [selectedPage, setSelectedPage] = useState(null);
  // function capSpace(name) { 
  //   name.replace(/([A-Z]+)/g, (match) => ` ${match}`).trim();
  // }

  function handleSelect(selected) {
    setPages((pages) => {
      pages.find((x) => x.order === 1).order = selected.order;
      pages.find((x) => x.name === selected.name).order = 1;

       return [...pages.sort((a, b) => a.order - b.order)]}
     );
     
     setSelectedPage((page) => page = pages.find((x) => x.name === selected.name).id);
  }

  function addNew(newContent) {
    console.log(`Added new content: ${newContent.name}`);
  }

  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Page onAdd={addNew} onSelect={handleSelect} contents={pages} selectedPage={selectedPage} />}/>
          <Route path="/resource" element={<Resource dataResources={dataResources} />} />
          <Route path="/Grid/:id" element={<Grid dataGrid={dataGrid} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;