// @ts-nocheck
import { TopScores } from "./pages/TopScores/TopScores";
import { AnswerJustification } from "./pages/Answer/AnswerJustification";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import GameView from "./pages/GameView/GameView";
import GameOver from "./pages/GameOver/GameOver";
import { useState } from "react";

function App() {
  const [score, setScore] = useState<number>(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/answer_clarification"
            element={<AnswerJustification />}
          />
          <Route
            path="/quiz"
            element={<GameView score={score} setScore={setScore} />}
          />
          <Route path="/score" element={<GameOver score={score} />} />
          <Route path="/top_scores" element={<TopScores />} />
          <Route path="" element={null} />
          <Route path="" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
