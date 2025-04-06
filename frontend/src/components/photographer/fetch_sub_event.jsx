// src/components/FetchSubEvent.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./fetch-sub-event.css"; // Optional for styling
import { Link } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';
const FetchSubEvent = () => {
  const { studioId } = useParams(); // Get studioId from route
  const [subEvents, setSubEvents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/studios/${studioId}/subevents`);
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
      {subEvents.length === 0 ? (
        <p>No sub-events found.</p>
      ) : (
        <div>
          <div className="addButton">
            <Link to={`/subevents/${studioId}`} >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>Add Categories</span>
          </Link>
          </div>
          <div className="sub-event-card-container">
            {subEvents.map((event) => (
              <div className="sub-event-card" key={event._id}>
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
