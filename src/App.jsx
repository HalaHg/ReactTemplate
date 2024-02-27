import { Header } from "./components/Header";
import { Content } from "./components/Content";
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
    <>
    <Header></Header>
    <Content onAdd={addNew} onSelect={handleSelect} contents={contents} ></Content>
    </>
  );
}

export default App;
