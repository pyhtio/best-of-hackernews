import React from "react";

import ArticleListItem from "./ArticleListItem";

function ArticleList({ articles }) {
  return (
    <ul className="ArticleList">
      {articles.map((id) => {
        return <ArticleListItem key={id} id={id} />;
      })}
    </ul>
  );
}

export default ArticleList;
