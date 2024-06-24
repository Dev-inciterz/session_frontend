import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupLogin from './Components/SignupLogin';
import TimeLeft from './Components/TimeLeft';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SignupLogin />} />
                    <Route path="/time-left" element={<TimeLeft />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
