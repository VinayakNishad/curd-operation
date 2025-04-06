import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Carousel from "./carousel";
import image from "./images/image.png";
import Contact from "./contact";
import About from "./About";
import Services from "./services";
import Event from "./event";
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSubMenu = (menu) => {
    setSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <>
      <header className="header">
        <nav className="top-bar">
          <div className="logo">
            <img src={image} alt="Eventify Logo" />
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search..." id="search"></input>
          </div>
          <div className="authentication">
            <a href="#" className="active" id="sign-in">Sign In</a>
            <a href="#" className="de-active" id="sign-up">Sign Up</a>
          </div>
        </nav>
      </header>
      <main className="main-content" >
        <Carousel />
        <Event />
        <Services />
        <About />
        <Contact />
      </main>
      <footer className="footer" >
        <p>&copy; 2025 Eventify Company. All rights reserved.</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </footer>
    </>



  );
};

export default Home;
