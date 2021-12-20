import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GettingProvider } from "../contexts/GettingContext ";
import { SendingProvider } from "../contexts/SendingContext";
import Home from "../pages/Home";
import ListOptionPage from "../pages/ListOptionPage";
import ListSubjects from "../pages/lists/ListSubjects";
import SendDataPage from "../pages/sending/SendDataPage";
import SendProfessorPage from "../pages/sending/SendProfessorPage";
import SendSubjectPage from "../pages/sending/SendSubjectPage";

function App() {
  return (
    <Router>
      <SendingProvider>
        <GettingProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/send/subjects" element={<SendSubjectPage />} />
            <Route
              exact
              path="/send/subjects/professors"
              element={<SendProfessorPage />}
            />
            <Route
              exact
              path="/send/subjects/professors/data"
              element={<SendDataPage />}
            />
            <Route exact path="/get" element={<ListOptionPage />} />
            <Route exact path="/get/subjects" element={<ListSubjects />} />
          </Routes>
        </GettingProvider>
      </SendingProvider>
    </Router>
  );
}

export default App;
