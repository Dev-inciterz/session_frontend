import React, { useState, useEffect } from "react";
import Plans from "./Plans";
import Loader from "./Loader"; // Import Loader component
import { logout } from '../Services/AuthServices';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function TimeLeft() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
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
    setIsLoading(true); // Start loading indicator
    console.warn("Logout initiated");
    const token = localStorage.getItem('token');
    console.error("token value", token);


    try {
      await logout(token); // Call logout API
      localStorage.removeItem('token'); // Remove token from localStorage
      localStorage.removeItem('expiresIn'); // Remove expiresIn from localStorage
      toast.success("Logout successful"); // Show success toast
      navigate('/'); // Navigate to home route after logout
      
    } catch (error) {
      console.error("Logout failed", error);
      // Handle logout failure if needed
      toast.error(`${error}`)
    } finally {
      setIsLoading(false); // Stop loading indicator after logout completes
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
        {isLoading ? (
          <Loader /> // Render Loader when isLoading is true
        ) : (
          <button onClick={handleLogout} className="logoutbtn">Logout</button>
        )}
      </div>
    </div>
  );
}

export default TimeLeft;
