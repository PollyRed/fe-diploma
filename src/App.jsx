import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SuccessPage from "./components/SuccessPage/SuccessPage";

function App() {
  return (
    <div className="App">
      <Router>
        <SuccessPage/>
      </Router>
    </div>
  );
}

export default App;
