// Subevent form



// src/components/SubEvent.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sub-event.css"; // Assuming you have a CSS file for styling
// import UploadImages from "./UploadImages";
const SubEvent = (props) => {
  const { studioId } = useParams(); // Getting studio ID from the route
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const service = props.service;
      
      const subEventData = { title, price, description, service };
      await axios.post(`http://localhost:3001/studios/${studioId}/subevents`, subEventData);
      setMessage("Sub-event added successfully!");
      setTitle("");
      setPrice("");
      setDescription("");
    navigate(`/getPhotographerImages/${studioId}`); // Redirect to the fetch sub-event page or any other page
    } catch (error) {
      console.error("Error adding sub-event:", error);
      setMessage("Error adding sub-event.");
    }
  };

  return (
    <div className="sub-event-form">
      {/* <h2>Add 10 sample images</h2>
      <UploadImages studioId={studioId} /> */}
      <span><h4>Add Sub Event for Studio ID:</h4>{studioId}</span>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Sub Event Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Add Sub Event</button>
      </form>
    </div>
  );
};

export default SubEvent;
