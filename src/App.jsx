import { Header } from "./components/Header";
import { Resource } from "./components/Resource";
import { Page } from "./components/Page";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";
import "./App.css";

const CONTENTS = [
  { name: 'App Services', src: '/app-services.png' },
  { name: 'SQL elastic pools', src: '/sql-elastic-pools.png' }
];

function App() {
  const [contents, setContents] = useState(CONTENTS);

  function handleSelect(selectedName) {
    console.log(`Selected: ${selectedName}`);
  }

  function addNew(newContent) {
    setContents((prevContents) => [...prevContents, newContent]);
    console.log(`Added new content: ${newContent.name}`);
  }

  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route
            path="/"
            exact
            element={<Page onAdd={addNew} onSelect={handleSelect} contents={contents} />}
          />
          <Route path="/resource" element={<Resource />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;