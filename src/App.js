import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupLogin from "./Components/SignupLogin";
import TimeLeft from "./Components/TimeLeft";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce} // Corrected syntax: use curly braces and provide the transition component directly
        />
        <Routes>
          <Route path="/" element={<SignupLogin />} />
          <Route path="/time-left" element={<TimeLeft />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
