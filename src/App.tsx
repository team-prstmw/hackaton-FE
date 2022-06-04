// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import GameView from "./pages/GameView/GameView";
import GameOver from "./pages/GameOver/GameOver";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/answer_clarification" element={null} />
          <Route path="/quiz" element={<GameView/>} />
          <Route path="/score" element={<GameOver/>} />
          <Route path="" element={null} />
          <Route path="" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
