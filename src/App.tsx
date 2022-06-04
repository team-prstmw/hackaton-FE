// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { QueryClient, QueryClientProvider } from "react-query";
import NewQuestionPage from "./pages/NewQuestionPage/NewQuestionPage";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <header className="App-header">
          <NewQuestionPage />
        </header>
      </QueryClientProvider>
    </div>
  );
}

export default App;
