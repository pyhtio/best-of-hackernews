import React, { useState, useEffect } from "react";

import ArticleListItem from "./ArticleListItem";

function ArticleList() {
  const [articleIDs, setArticleIDs] = useState([]);

  useEffect(() => {
    const storageKey = "bestArticlesList";
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
    <ul className="ArticleList">
      {articleIDs.slice(0, 20).map((id) => {
        return <ArticleListItem key={id} id={id} />;
      })}
    </ul>
  );
}

export default ArticleList;
