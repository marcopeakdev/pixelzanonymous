import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import MintPage from "./pages/Mint/Mint";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/Mint" element={<MintPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
