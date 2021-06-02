import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../scss/index.scss";

import { useData } from "./services/DataContext";

import User from "./pages/User";
import Home from "./pages/Home";

function App() {
  const { setBestArticles } = useData();

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/beststories.json")
      .then((response) => response.json())
      .then((result) => {
        setBestArticles(result.slice(0, 20));
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/creator/:id" children={<User />} />
        <Route path="/" children={<Home />} />
      </Switch>
    </Router>
  );
}

export default App;
