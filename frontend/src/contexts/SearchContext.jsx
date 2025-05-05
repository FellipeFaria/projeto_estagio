import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [onSearch, setOnSearch] = useState(null);

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, onSearch, setOnSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
