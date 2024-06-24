import React from 'react';
import './Plans.css'

const Plans = () => {
  return (
    <div className="internet-plans">
      <h1>Choose how fast you want to go</h1>
      <div className="plans">
        <div className="plan">
          <h2>300Mbps speed</h2>
          <p>Limited availability/areas.</p>
          <div className="pricing">
            <span className="dollar">$</span>
            Select Shop now to see pricing and deals available at your address.
          </div>
          <button className='planbtns'>Shop now</button>
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
          <h2>500Mbps speed</h2>
          <p>Limited availability/areas.</p>
          <div className="pricing">
            <span className="dollar">$</span>
            Select Shop now to see pricing and deals available at your address.
          </div>
          <button className='planbtns'>Shop now</button>
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
          <h2>Up to 1 GIG speed</h2>
          <p>Limited availability/areas.</p>
          <div className="pricing">
            <span className="dollar">$</span>
            Select Shop now to see pricing and deals available at your address.
          </div>
          <button className='planbtns'>Shop now</button>
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