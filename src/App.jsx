import { Header } from "./components/Header";
import { Resource } from "./components/Resource";
import { Content } from "./components/Content";
import { Page } from "./components/Page";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from "react";
import "./App.css";

const CONTENTS = [
  {  name: 'App Services',  src:'/app-services.png' },
  {  name: 'SQL elastic pools',  src: '/sql-elastic-pools.png'}
];


function App() {
  const [contents, setContents] = useState(CONTENTS);

  function handleSelect(){
    
  }
  function addNew(){
    
  }

  return (
    <Router>
    <>
    <Header></Header>
    <Content onAdd={addNew} onSelect={handleSelect} contents={contents} ></Content>

    <Route path="/" exact component={Page} />
    <Route path="/resource" exact component={Resource} />
    </>
    </Router>
  );
}

export default App;
