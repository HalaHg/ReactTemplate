import { Header } from "./components/Header";
import { Resource } from "./components/Resource";
import { Page } from "./components/Page";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import "./App.css";
import { dataResources } from "./data";

const CONTENTS = [
  { order : 0, name: 'Create a resource', src: '/add.png' },
  { order : 1, name: 'App Services', src: '/app-services.png' },
  { order : 2, name: 'SQL elastic pools', src: '/sql-elastic-pools.png' }
];

function App() {
  const [contents, setContents] = useState(CONTENTS);

  function capSpace(name) { 
    name.replace(/([A-Z]+)/g, (match) => ` ${match}`).trim();
  }

  function handleSelect(selected) {
    setContents((contents) => {
      contents.find((x) => x.order === 1).order = selected.order;
      contents.find((x) => x.name === selected.name).order = 1;

       return [...contents.sort((a, b) => a.order - b.order)]}
     );
    console.log(`Selected: ${selected.name}`);
  }

  function addNew(newContent) {
    // setContents((prevContents) => [...prevContents, newContent]);
    console.log(`Added new content: ${newContent.name}`);
  }

  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Page onAdd={addNew} onSelect={handleSelect} contents={contents} />}
          />
          <Route path="/resource" element={<Resource dataResources={dataResources} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;