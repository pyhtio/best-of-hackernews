import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { humanReadableTimestamp } from "../utils/helpers";

import Loader from "./Loader";

function ArticleListItem({ id }) {
  const [articleData, setArticleData] = useState({});

  const storageKey = `story-${id}`;

  useEffect(() => {
    const cachedData = sessionStorage.getItem(storageKey);
    if (cachedData) {
      setArticleData(JSON.parse(cachedData));
    } else {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((response) => response.json())
        .then((result) => {
          setArticleData(result);
          sessionStorage.setItem(storageKey, JSON.stringify(result));
        });
    }
  }, []);

  if (Object.keys(articleData).length === 0) {
    return (
      <li>
        <Loader />
      </li>
    );
  }

  return (
    <li>
      <h3>
        <a
          className="external"
          target="_blank"
          rel="noopener noreferrer"
          href={articleData.url}
        >
          {articleData.title}
        </a>
      </h3>
      <div className="ArticleList__meta">
        <p>
          <Link to={"/creator/" + articleData.by}>{articleData.by}</Link>
          {", "}
          {humanReadableTimestamp(articleData.time)}
        </p>
        <p>{articleData.score} points</p>
      </div>
    </li>
  );
}

export default ArticleListItem;
