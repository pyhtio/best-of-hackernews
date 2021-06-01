import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../scss/index.scss";

import UserProfile from "./pages/UserProfile";
import ArticleList from "./pages/ArticleList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/creator/:id" children={<UserProfile />} />
        <Route path="/" children={<ArticleList />} />
      </Switch>
    </Router>
  );
}

export default App;
