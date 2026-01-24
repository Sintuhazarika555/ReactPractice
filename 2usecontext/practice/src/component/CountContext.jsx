import { createContext, useState } from "react";

// 1. Create the Context
export const CountContext = createContext();

// 2. Create the Provider
export function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);
  const reset = () => setCount(0);

  return (
    <CountContext.Provider value={{ count, increment, reset }}>
      {children}
    </CountContext.Provider>
  );
}