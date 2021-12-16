import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SendSubjectPage from "../pages/sending/SendSubjectPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/send/subjects" element={<SendSubjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
