import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { CreateResourcePage } from "./components/CreateResourcePage";
import { initialState } from "./data";
import "./styles/App.css";


function App() {
  const [globalState, setGlobalState] = useState(initialState)
  //const [pages, setPages] = useState(pagesContent);

  function handleSelect(contentKey, index) {

    setGlobalState({ ...globalState, currentPageKey: contentKey }
    );
  }

  function addNew(newContent) {
    console.log(`Added new content: ${newContent.name}`);
  }

  return (
    <>
      <Header></Header>
      {globalState.currentPageKey == "home" && <HomePage onSelect={(item) => handleSelect(item)} pageState={globalState.homePage}></HomePage>}
      {globalState.currentPageKey == "createResource" && <CreateResourcePage dataResources={globalState.createResourcePage}></CreateResourcePage>}
      {globalState.currentPageKey == "appServices"}
      {globalState.currentPageKey == "elasticPools"}
    </>
  );
}

export default App;