import React from "react";

import { useData } from "../services/DataContext";

import Page from "../components/Page";

import ArticleList from "../components/ArticleList";

function Home() {
  const { bestArticles } = useData();

  return (
    <Page>
      <main>
        <h2>Displaying the best of HN</h2>
        <ArticleList articles={bestArticles} />
      </main>
    </Page>
  );
}

export default Home;
