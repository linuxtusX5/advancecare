import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./user/Signup-Login/Signup"; 
import Front from "./user/Signup-Login/Front";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Front />} />
          <Route exact path="Signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
