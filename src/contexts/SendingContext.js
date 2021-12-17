import { createContext, useState } from "react";

const SendingContext = createContext();

export function SendingProvider({ children }) {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [examName, setExamName] = useState("");
  const [pdfLink, setPDFLink] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <SendingContext.Provider
      value={{
        selectedSubject,
        setSelectedSubject,
        selectedProfessor,
        setSelectedProfessor,
        examName,
        setExamName,
        pdfLink,
        setPDFLink,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </SendingContext.Provider>
  );
}

export default SendingContext;
