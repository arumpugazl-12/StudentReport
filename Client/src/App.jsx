import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SubmitReport from "./Pages/SubmitReport";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/submit-report"} element={<SubmitReport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
