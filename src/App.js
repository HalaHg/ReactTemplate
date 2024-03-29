import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import Page from "./components/Page";
import { initialState } from "./data";
import "./styles/App.css";

function App() {
  const [globalState, setGlobalState] = useState(initialState);
  //const [pages, setPages] = useState(pagesContent);

  function handleSelect(content) {
    setGlobalState({ ...globalState, currentPageKey: content.key, currentPageTitle: content.name });
  }

  function handleGoHome() {
    setGlobalState({ ...globalState, currentPageKey: "home", currentPageTitle: "Home" });
  }

  // function handleRendering(pageKey, data) {
  //   setGlobalState({ ...globalState, ...[pageKey].data = data });
  // }

  function handleRendering(data) {
    setGlobalState({
      ...globalState,
      [globalState.currentPageKey]: { ...globalState[globalState.currentPageKey], data: data }
    }
    );
  }

  return (
    <>
      <Header goHome={handleGoHome}></Header>
      {globalState.currentPageKey === "home" ? (
        <HomePage
          onSelect={(item) => handleSelect(item)}
          pageState={globalState.homePage}
        ></HomePage>
      ) :
        <Page
          titleClassName=""
          pageKey={globalState.currentPageKey}
          title={globalState.currentPageTitle}
          data={globalState[globalState.currentPageKey]}
          renderParent={(data) => handleRendering(data)}
        ></Page>}

      {/* {globalState.currentPageKey == "appServices"}
      {globalState.currentPageKey == "elasticPools"} */}
    </>
  );
}

export default App;
