import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import HomePage from "./components/pages/HomePage/HomePage";
import OrderPage from "./components/pages/OrderPage/OrderPage";
import SuccessPage from "./components/pages/SuccessPage/SuccessPage";

function App() {
    return (
        <Router className="App" basename={window.location.pathname || ''}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/order/*" element={<OrderPage/>}/>
                <Route path="/success/*" element={<SuccessPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
