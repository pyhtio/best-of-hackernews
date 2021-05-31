import React, { useState, useEffect } from "react";
import { render } from "react-dom";

import "../scss/index.scss";

import Page from "./components/Page";

function App() {
  const [myVar, setMyVar] = useState("1");

  useEffect(() => {
    setMyVar("2");
  }, []);

  return (
    <Page>
      <h1>Hello worlds</h1>
      <p>{myVar}</p>
    </Page>
  );
}

const root = document.getElementById("app");

if (root) {
  render(
    // <DataProvider>
    <App />,
    // </DataProvider>,
    root
  );
}
