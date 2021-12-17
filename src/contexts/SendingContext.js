import { createContext, useState } from "react";

const SendingContext = createContext();

export function SendingProvider({ children }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  return (
    <SendingContext.Provider
      value={{
        selectedSubject,
        setSelectedSubject,
        selectedProfessor,
        setSelectedProfessor,
      }}
    >
      {children}
    </SendingContext.Provider>
  );
}

export default SendingContext;
