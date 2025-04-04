import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Carousel from "./carousel";
import image from "./images/image.png";
import Contact from "./contact";
const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({});

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
                    <a href="#" class="active" id="sign-in">Sign In</a>
                    <a href="#" class="de-active" id="sign-out">Sign Out</a>
                </div>
            </nav>
        </header>
      {/* <aside className="sidebar">
      <nav id="side-bar" className={sidebarOpen ? "open" : "close"}>
        <ul>
          <li>
            <span className="logo" style={{ display: sidebarOpen ? "block" : "none" }}>
              Eventify
            </span>
            <button onClick={toggleSidebar} id="toggle-btn">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
              </svg>
            </button>
          </li>
          <li className="active">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="#e3e3e3">
                <path
                  d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                fill="#e3e3e3">
                <path
                  d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
              </svg>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <button className="dropdown-btn" onClick={() => toggleSubMenu("create")}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e3e3e3">
                        <path
                            d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
              <span>Create</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e3e3e3">
                        <path d="M480-360 280-560h400L480-360Z" />
                    </svg>
            </button>
            {submenuOpen.create && (
              <ul className="sub-menu show">
                <li><Link to="#">Folder</Link></li>
                <li><Link to="#">Document</Link></li>
                <li><Link to="#">Project</Link></li>
              </ul>
            )}
          </li>
          <li>
            <button className="dropdown-btn" onClick={() => toggleSubMenu("todo")}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e3e3e3">
                        <path
                            d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
                    </svg>
              <span>To do list</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e3e3e3">
                        <path d="M480-360 280-560h400L480-360Z" />
                    </svg>
            </button>
            {submenuOpen.todo && (
              <ul className="sub-menu show">
                <li><Link to="#">Work</Link></li>
                <li><Link to="#">Private</Link></li>
                <li><Link to="#">Coding</Link></li>
                <li><Link to="#">Gardening</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/calendar">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e3e3e3">
                        <path
                            d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                    </svg>
              <span>Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#e3e3e3">
                        <path
                            d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
      </aside> */}

      <main className="main-content" >
        <Carousel />


        <section id="home" className="container" >
          <h1>Event Management</h1>
          <p>We provide end-to-end event management solutions to ensure your event runs smoothly and successfully. Whether it’s a wedding, corporate gathering, birthday, or product launch, we handle everything from planning to execution.</p>
          <div className="list_of_event">
            <Link to="/getStudios" className="event-card">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
                alt="Photographer"
              />
              <span className="event-title">Photographer</span>
            </Link>
            <Link to="/getStudios" className="event-card">
              <img
                src="https://www.shutterstock.com/image-photo/banquet-hall-tables-chairs-set-600nw-2438817641.jpg"
                alt="Hall"
              />
              <span className="event-title">Hall</span>
            </Link>
            <Link to="/getStudios" className="event-card">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
                alt="Photographer"
              />
              <span className="event-title">Photographer</span>
            </Link>
            <Link to="/getStudios" className="event-card">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
                alt="Photographer"
              />
              <span className="event-title">Photographer</span>
            </Link>
            <Link to="/getStudios" className="event-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBmdsyuRmujYTZEirqXdzPjvcFy-7zJ_Uy0Oipplas7tx292GksAG5I5QplEGXt4LLRPI&usqp=CAU"
                alt="Decoration"
              />
              <span className="event-title">Decoration</span>
            </Link>
            <Link to="/getStudios" className="event-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7gibV9919nIhXfMlqlltDfq9K3dxCbwrgE1jK9iwHTKpFkmJGbODlXhquMIvKmG_qPw&usqp=CAU"
                alt="bartender"
              />
              <span className="event-title">Bartender</span>
            </Link>
          </div>
          <h2>Packages</h2>
          <div className="list_of_event">
            <Link to="/getStudios" className="event-card">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
                alt="Photographer"
              />
              <span className="event-title">Wedding</span>
            </Link>
            <Link to="/getStudios" className="event-card">
              <img
                src="https://www.shutterstock.com/image-photo/banquet-hall-tables-chairs-set-600nw-2438817641.jpg"
                alt="Hall"
              />
              <span className="event-title">Birthday</span>
            </Link>
            <Link to="/getStudios" className="event-card">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
                alt="Photographer"
              />
              <span className="event-title">Annivarsary</span>
            </Link>
            <Link to="/getStudios" className="event-card">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
                alt="Photographer"
              />
              <span className="event-title">Barso</span>
            </Link>

          </div>


        </section>
        <section id="services" className="container">
          <h2>Services</h2>
          <p>We provide a full range of event services to make your special occasion stress-free and memorable. From planning to execution, we handle everything with creativity and precision.</p>

          <div className="service-list">
            <div className="service-card">
              <h3>Event Planning</h3>
              <p>Plan your perfect event with ease! Whether it's a wedding, birthday, corporate event, or any special occasion, we help you bring your vision to life.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLQLWoVbworZ9nXz40X5KGv4Wj41YNwKRVw&s"
                alt="event-planning"
              />
            </div>
            <div className="service-card">
              <h3>Event Management</h3>
              <p>We turn your dream event into reality with seamless planning and execution.</p>
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D12AQHbFAgJm3O16w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1618318102565?e=2147483647&v=beta&t=NKSioZnKzeTuTO97v15fZgB4mT0BUggujs-4Y4tdQ4U"
                alt="evet-management"
                />
            </div>
            <div className="service-card">
              <h3>Event Coordinator</h3>
              <p>An Event Coordinator ensures every aspect of your event runs smoothly, from planning to execution.</p>
                <img 
                src="https://cdnl.iconscout.com/lottie/premium/thumb/process-management-animation-download-in-lottie-json-gif-static-svg-file-formats--flow-task-manage-event-business-character-pack-people-animations-4651682.gif"
                alt="event-coordinator"
                />

            </div>
            <div className="service-card" section="services">
              <h3>Event Marketing</h3>
              <p>Maximize your event’s reach with strategic marketing that attracts the right audience, boosts engagement, and ensures a successful turnout. </p>
              <img
              src="https://media.licdn.com/dms/image/v2/D5612AQHAjuQVVC5-zA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1657725931052?e=2147483647&v=beta&t=buJNrnULUjCwAT8ywrxYNsxLPbFbVG1SnYEqjY73w50"
              alt="event-marketing"
              />
            </div>
            <div className="service-card">
              <h3>Event Promotion</h3>
              <p>Boost attendance and engagement with our expert event promotion strategies! Whether you’re hosting a conference, concert, product launch, or festival, we ensure your event gets the visibility it deserves.</p>
              <img
              src="https://cdn.prod.website-files.com/57822c659e1627a433e6a7c6/60a48dad9548b25e0af86768_iC2Aaf5UG2oPx6Kh18wrGewUGDtyVABcPzSmk9Qn5gGIdGWYYhlHASzdh5itfRfhH-QriyDFE612HTsSWVswrgHRyq2lz4JNMMKZ5rGOKlI0b6V-C8OgEE6iwpY-M6cHG7S9un9P.gif"
              alt="event-promotion"
              />
            </div>
           
          </div>

        </section>
        <section id="about" className="container" section="about">
          <h2>About</h2>
          <p>At Eventify, we specialize in professional event management, bringing creativity, precision, and seamless execution to every occasion. Whether it’s a wedding, corporate event, birthday, or product launch, our team is dedicated to making your event unforgettable.</p>
        </section>
        <section id="contact">
        <Contact/>
      </section>
        



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
