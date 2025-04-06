import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Halls = () => {
    const [formData, setFormData] = useState({
        package_name: "",
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
            formDataWithImage.append("package_image", image);
        }

        try {
            await axios.post("http://localhost:3001/add_package", formDataWithImage, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setFormData({
                package_name: ""
            });
            setImage(null);
            alert("Package added successfully!");
            navigate("/get_package");
        } catch (error) {
            console.error("Error adding studio:", error);
        }
    };

    return (
        <div className="container">
            <h2>Add Package</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="package_name" placeholder="Package Name" value={formData.package_name} onChange={handleChange} required />
                <input type="file" name="package_image" accept="image/*" onChange={handleImageChange} required />
                <button type="submit">Add Hall</button>
            </form>
        </div>
    );
};

export default Halls;
