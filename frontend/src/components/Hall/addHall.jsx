import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Halls = () => {
    const [formData, setFormData] = useState({
        hall_name: "",
        hall_location: "",
        hall_description: "",
        hall_contact: "",
        hall_email: "",
    });

    const [image, setImage] = useState(null);
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataWithImage = new FormData();

        Object.keys(formData).forEach((key) => {
            formDataWithImage.append(key, formData[key]);
        });

        if (image) {
            formDataWithImage.append("hall_image", image);
        }

        try {
            await axios.post("http://localhost:3001/add_halls", formDataWithImage, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setFormData({
                hall_name: "",
                hall_location: "",
                hall_description: "",
                hall_contact: "",
                hall_email: "",
            });
            setImage(null);
            alert("Studio added successfully!");
            navigate("/get_halls");
        } catch (error) {
            console.error("Error adding studio:", error);
        }
    };

    return (
        <div className="container">
            <h2>Add Hall</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="hall_name" placeholder="Hall Name" value={formData.hall_name} onChange={handleChange} required />
                <input type="text" name="hall_location" placeholder="Location" value={formData.hall_location} onChange={handleChange} required />
                <textarea name="hall_description" placeholder="Description" value={formData.hall_description} onChange={handleChange} required />
                <input type="tel" name="hall_contact" placeholder="Contact" value={formData.hall_contact} onChange={handleChange} required />
                <input type="email" name="hall_email" placeholder="Email" value={formData.hall_email} onChange={handleChange} required />
                <input type="file" name="hall_image" accept="image/*" onChange={handleImageChange} required />
                <button type="submit">Add Hall</button>
            </form>
        </div>
    );
};

export default Halls;
