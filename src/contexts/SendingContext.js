import { createContext, useState } from "react";

const SendingContext = createContext();

export function SendingProvider({ children }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  return (
    <SendingContext.Provider value={{ selectedSubject, setSelectedSubject }}>
      {children}
    </SendingContext.Provider>
  );
}

export default SendingContext;
