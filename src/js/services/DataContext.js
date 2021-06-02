import React, { useState, createContext, useContext } from "react";

const DataContext = createContext(null);

function DataProvider(props) {
  const [bestArticles, setBestArticles] = useState([]);

  const value = { bestArticles, setBestArticles };

  return <DataContext.Provider value={value} {...props} />;
}

function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(`useData must be used withing a DataProvider`);
  }

  const { bestArticles, setBestArticles } = context;

  return { bestArticles, setBestArticles };
}

export { DataProvider, useData };
