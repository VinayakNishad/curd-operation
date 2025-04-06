//display subevents


// src/components/FetchSubEvent.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./fetch-sub-event.css"; // Optional for styling
import { Link } from "react-router-dom";


const FetchSubEvent = (props) => {
  const { studioId } = useParams(); // Get studioId from route
  const [subEvents, setSubEvents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubEvents = async () => {
      try {
        const service = props.service;
        const response = await axios.get(`http://localhost:3001/studios/${studioId}/subevents`, {
          params: {
            service: service
          }
        });
        setSubEvents(response.data);
      } catch (err) {
        console.error("Error fetching sub-events:", err);
        setError("Failed to load sub-events.");
      }
    };

    fetchSubEvents();
  }, [studioId]);

  return (
    <div className="fetch-sub-events">
      {/* <h2>Sub Events for Studio ID: {studioId}</h2> */}
      {error && <p className="error">{error}</p>}
      <div><Link to={`/subevents/${studioId}`} className="Button">
        <span className="sub-event-card-title">Add Subevent</span>
      </Link></div>
      {subEvents.length === 0 ? (
        <p>No sub-events found.</p>
      ) : (
        <div>
          <div className="sub-event-card-container">
            {subEvents.map((event) => (
              <div className="sub-event-card-card" key={event._id}>
                <p id="sub-event-card-title">{event.title}</p>
                <p><strong>₹{event.price}</strong> </p>
                <p>{event.description}</p>
              </div>

            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default FetchSubEvent;
