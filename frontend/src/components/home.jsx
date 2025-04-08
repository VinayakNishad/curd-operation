import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Carousel from "./carousel";
import image from "./images/image.png";
import Contact from "./contact";
import About from "./About";
import Services from "./services";
import Event from "./event";
const Home = (props) => {
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
          
          <div className="authentication">
          <Link to="/Login" className="active" id="sign-in">Admin login <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg></Link>
          </div>
        </nav>
      </header>

      <main className="main-content" >
        <Carousel />

        <Event setService={props.setService} setPackageType={props.setPackageType}/>

        <Services />

        <About />

        <Contact />





      </main>
      <footer className="footer" >


        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </footer>
    </>



  );
};

export default Home;
