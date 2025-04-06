import React from "react";
import { Link } from "react-router-dom";
import "./Event.css"; // Assuming you will style it here

const Event = () => {
  return (
    <section id="home" className="event-section">
      <h1>Event Management</h1>
      <p>
        We provide end-to-end event management solutions to ensure your event runs smoothly and successfully. Whether it’s a wedding, corporate gathering, birthday, or product launch, we handle everything from planning to execution.
      </p>

      <div className="list_of_event">
        <Link to="/getStudios" className="event-card">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
            alt="Photographer"
          />
          <span className="event-title">Photographer</span>
        </Link>

        <Link to="/get_halls" className="event-card">
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
          <span className="event-title">Caterer</span>
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
            alt="Bartender"
          />
          <span className="event-title">Bartender</span>
        </Link>
      </div>

      <h2>Packages</h2>
      <div className="list_of_event">
        <Link to="/getStudios" className="event-card">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
            alt="Wedding"
          />
          <span className="event-title">Wedding</span>
        </Link>

        <Link to="/getStudios" className="event-card">
          <img
            src="https://www.shutterstock.com/image-photo/banquet-hall-tables-chairs-set-600nw-2438817641.jpg"
            alt="Birthday"
          />
          <span className="event-title">Birthday</span>
        </Link>

        <Link to="/getStudios" className="event-card">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
            alt="Anniversary"
          />
          <span className="event-title">Anniversary</span>
        </Link>

        <Link to="/getStudios" className="event-card">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQGPsGZPrLyRow/article-cover_image-shrink_600_2000/0/1691669661170?e=2147483647&v=beta&t=8DeCPVCH3nkxH5dMfiLEWjK3xdq4TkGN372pnld548k"
            alt="Barso"
          />
          <span className="event-title">Barso</span>
        </Link>
      </div>
    </section>
  );
};

export default Event;
