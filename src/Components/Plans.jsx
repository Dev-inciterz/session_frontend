import React, { useState } from "react";
import "./Plans.css";

import { SettingCustomExpiry } from "../Services/AuthServices";

import { toast } from 'react-toastify';
import Loader from "./Loader";

const Plans = () => {


  const [isLoading, setIsLoading] = useState(false); // New state for loading indicator

  const BuyPlan = async (days) => {
    try {
      setIsLoading(true)
      const token = localStorage.getItem("token");
      // Call the async function and wait for it to complete
      const data = await SettingCustomExpiry(days, token); // Assuming SettingCustomExpiry returns an object with token and expiresIn
  
      // Clear previous token and expiresIn
      localStorage.removeItem('token');
      localStorage.removeItem('expiresIn');
  
      // Set new token and expiresIn
      localStorage.setItem('token', data.token);
      localStorage.setItem('expiresIn', data.expiresIn);
      toast.success("Plan Buying Successfull");
    } catch (error) {
      console.log("Error occurred while buying plan:", error);
      toast.error("Please try Again later after some time:" );
    }
  };
  return (
    <div className="internet-plans">
      <h1>Choose how fast you want to go</h1>
      {isLoading && <Loader />} 
      <div className="plans">
        <div className="plan">
          <h2>300Mbps speed - 30 days</h2>
          <p>Limited availability/areas.</p>
          <div className="pricing">
            <span className="dollar">$</span>
            Select Shop now to see pricing and deals available at your address.
          </div>
          <button className="planbtns" onClick={() => BuyPlan(30)} >Buy now</button>
          <div className="features">
            <h3 className="features-title">Features & benefits</h3>
            <ul>
              <li>
                <i className="fas fa-check-circle"></i>
                Game, stream, and video chat with confidence
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                Support your smart home devices, ensuring they run reliably
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                15x faster upload speeds than cable internet
                <span className="info-icon">
                  <i className="fas fa-info-circle"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="plan">
          <h2>500Mbps speed - 20 days</h2>
          <p>Limited availability/areas.</p>
          <div className="pricing">
            <span className="dollar">$</span>
            Select Shop now to see pricing and deals available at your address.
          </div>
          <button className="planbtns">Buy now</button>
          <div className="features">
            <h3 className="features-title">Features & benefits</h3>
            <ul>
              <li>
                <i className="fas fa-check-circle"></i>
                Level up your gaming with low lag
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                Connect and control multiple smart devices with ease
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                20x faster upload speeds than cable internet
                <span className="info-icon">
                  <i className="fas fa-info-circle"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="plan">
          <h2>Up to 1 GIG speed - 10 days</h2>
          <p>Limited availability/areas.</p>
          <div className="pricing">
            <span className="dollar">$</span>
            Select Shop now to see pricing and deals available at your address.
          </div>
          <button className="planbtns">Buy now</button>
          <div className="features">
            <h3 className="features-title">Features & benefits</h3>
            <ul>
              <li>
                <i className="fas fa-check-circle"></i>
                The speed to succeed for work and pro-level gaming
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                Unleash the full potential of your smart home ecosystem
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                25x faster upload speeds than cable internet
                <span className="info-icon">
                  <i className="fas fa-info-circle"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
