// @ts-nocheck
import { TopScores } from "./pages/TopScores/TopScores";
import { AnswerJustification } from "./pages/Answer/AnswerJustification";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import GameView from "./pages/GameView/GameView";
import GameOver from "./pages/GameOver/GameOver";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NewQuestionPage from "./pages/NewQuestionPage/NewQuestionPage";

import styles from "./App.module.scss";
import { NEW_QUESTION_PAGE } from "./urls/frontend";
const queryClient = new QueryClient();

function App() {
  const [score, setScore] = useState<number>(0);

  return (
    <div className={styles.App}>
      <QueryClientProvider client={queryClient}>
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
            <Route path={NEW_QUESTION_PAGE} element={<NewQuestionPage />} />
            <Route path="" element={null} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
