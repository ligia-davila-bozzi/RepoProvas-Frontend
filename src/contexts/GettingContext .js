import { createContext, useState } from "react";

const GettingContext = createContext();

export function GettingProvider({ children }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
 
  return (
    <GettingContext.Provider
      value={{
        selectedSubject,
        setSelectedSubject,
        
      }}
    >
      {children}
    </GettingContext.Provider>
  );
}

export default GettingContext;
