import { TopScores } from "./pages/TopScores/TopScores";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <TopScores />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/answer_clarification" element={null} />
          <Route path="/hi" element={<HomePage />} />
          <Route path="" element={null} />
          <Route path="" element={null} />
          <Route path="" element={null} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
