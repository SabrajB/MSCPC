import React from "react";
import "./Header.css";
import logo from "../assets/logo.png"; // Ensure you have a logo image in the assets folder

const Header = () => {
    return (
      <header className="header-container">
        <div className="header-content">
          <img src={logo} alt="Company Logo" className="header-logo" />
          <nav>
            <ul className="nav-links">
              <li><a href="#" className="nav-item">About Us</a></li>
              <li><a href="#" className="nav-item">Services</a></li>
              <li><a href="#" className="nav-item">Tax Planning</a></li>
              <li><a href="#" className="nav-item">Bookkeeping</a></li>
              <li><a href="#" className="nav-item">Payroll</a></li>
              <li><a href="#" className="nav-item">Contact</a></li>
            </ul>
          </nav>
          <div className="contact-info">
            <p>Call us: <span className="phone-number">+1-416-300-3525</span></p>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;