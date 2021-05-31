import React, { useState, useEffect } from "react";

import "../scss/index.scss";

import Page from "./components/Page";

function App() {
  const [articleIDs, setArticleIDs] = useState([]);

  useEffect(() => {
    const storageKey = "topArticleList";
    const articleListURL =
      "https://hacker-news.firebaseio.com/v0/beststories.json";

    const cachedArticleIDs = sessionStorage.getItem(storageKey);

    if (cachedArticleIDs) {
      setArticleIDs(JSON.parse(cachedArticleIDs));
    } else {
      fetch(articleListURL)
        .then((response) => response.json())
        .then((result) => {
          setArticleIDs(result);
          sessionStorage.setItem(storageKey, JSON.stringify(result));
        });
    }
  }, []);

  return (
    <Page>
      <h1>Hello worlds</h1>
      <div>
        {articleIDs.slice(0, 20).map((id) => {
          return <div key={id}>{id}</div>;
        })}
      </div>
    </Page>
  );
}

export default App;
