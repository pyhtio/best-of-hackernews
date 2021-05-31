import React from "react";

import "../scss/index.scss";

import Page from "./components/Page";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <Page>
      <h1>Hello worlds</h1>
      <ArticleList />
    </Page>
  );
}

export default App;
