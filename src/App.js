import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import StuForm from "./components/StuForm";
import EmployeeFeedbackForm from "./components/EmployeeFeedbackForm";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/student">Student Registration</Link>
          <Link to="/employee">Employee Feedback</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/student" />} />
          <Route path="/student" element={<StuForm />} />
          <Route path="/employee" element={<EmployeeFeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
