import React, { createContext, useState, useContext, useEffect } from "react";

const TastyPicksContext = createContext();

export function TastyPicksProvider({ children }) {
  const [tastyPicks, setTastyPicks] = useState(() => {
    const stored = localStorage.getItem("TastyPicks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tastyPicks", JSON.stringify(tastyPicks));
  }, [tastyPicks]);

  return (
    <TastyPicksContext.Provider value={{ tastyPicks, setTastyPicks }}>
      {children}
    </TastyPicksContext.Provider>
  );
}

export function useTastyPicks() {
  return useContext(TastyPicksContext);
}
