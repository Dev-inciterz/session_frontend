import React, { useState, useEffect } from "react";
import Plans from "./Plans";

import { logout} from '../Services/AuthServices';
import { useNavigate } from 'react-router-dom';

function TimeLeft() {
  const [timeLeft, setTimeLeft] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedExpiresIn = localStorage.getItem("expiresIn");
    if (storedExpiresIn) {
      // Immediately calculate and set initial time left
      getTimeLeft(storedExpiresIn);

      // Update time left every second
      const interval = setInterval(() => {
        getTimeLeft(storedExpiresIn);
      }, 1000);

      // Cleanup function to clear interval when component unmounts
      return () => clearInterval(interval);
    }
  }, []);

  const handleLogout = async () => {
    console.warn("Logout initityed")
    const token = localStorage.getItem('token');
    console.error("token ila", token)

    try {
        await logout(token);
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
        navigate('/login');  // or any other route you want to navigate to after logout
    } catch (error) {
        console.error("Logout failed", error);
    }
};

  function getTimeLeft(tokenExpireString) {
    const tokenExpireDate = new Date(tokenExpireString);
    const currentDate = new Date();
    const timeDifference = tokenExpireDate.getTime() - currentDate.getTime();

    if (timeDifference <= 0) {
      setTimeLeft("Token Expired");
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const timeLeftString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    setTimeLeft(timeLeftString);
  }

  return (
    <div className="timmeleftfull">
      <div className="timeleftfirst">
        <h4 className="timelefthead">Time Left</h4>
    
        {timeLeft !== null && <h1>Time left: {timeLeft}</h1>}
      </div>

      <Plans />

      <div className="logoutbtnsect">
        <button onClick={handleLogout} className="logoutbtn">Logout</button>
      </div>
    </div>
  );
}

export default TimeLeft;
