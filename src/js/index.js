import React from "react";
import { render } from "react-dom";

import App from "./App";

import { DataProvider } from "./services/DataContext";

const root = document.getElementById("app");

if (root) {
  render(
    <DataProvider>
      <App />,
    </DataProvider>,
    root
  );
}
