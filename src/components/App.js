import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SendingProvider } from "../contexts/SendingContext";
import Home from "../pages/Home";
import SendProfessorPage from "../pages/sending/SendProfessorPage";
import SendSubjectPage from "../pages/sending/SendSubjectPage";

function App() {
  return (
    <Router>
      <SendingProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/send/subjects" element={<SendSubjectPage />} />
          <Route exact path='/send/subjects/professors' element={<SendProfessorPage />} />
        </Routes>
      </SendingProvider>
    </Router>
  );
}

export default App;
