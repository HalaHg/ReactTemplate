import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Grid } from "./components/Grid";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Resource } from "./components/Resource";
import { dataGrid, dataResources, pagesContent, initialState } from "./data";
import "./styles/App.css";


function App() {
  const [globalState, setGlobalState] = useState(initialState)
  const [pages, setPages] = useState(pagesContent);

 


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
        {/* <Routes>
          <Route path="/" exact element={<HomePage onAdd={addNew} onSelect={handleSelect} contents={pages}  />}/>
          <Route path="/resource" element={<Resource dataResources={dataResources} />} />
          <Route path="/Grid/:id" element={<Grid dataGrid={dataGrid} />} />
        </Routes> */}
        <HomePage pageState={globalState.homePage}></HomePage>
      </div>
    </Router>
  );
}

export default App;