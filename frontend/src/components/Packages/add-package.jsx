import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Package = () => {
    const [formData, setFormData] = useState({
        package_name: "",
        package_price: 0,
        package_photographer: [], // changed to array
        package_caterer: "",
        package_hall: "",
        package_bertender: "",
        package_decoration: "",
        package_description: ""
    });

    const [image, setImage] = useState(null);
    const [studioOptions, setStudioOptions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudios = async () => {
            try {
                const response = await axios.get("http://localhost:3001/getStudios");
                const options = response.data.map((studio) => ({
                    value: studio.studio_name,
                    label: studio.studio_name,
                }));
                setStudioOptions(options);
            } catch (error) {
                console.error("Error fetching studios:", error);
            }
        };

        fetchStudios();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePhotographerChange = (selectedOptions) => {
        const values = selectedOptions.map(option => option.value);
        setFormData({ ...formData, package_photographer: values });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataWithImage = new FormData();

        Object.keys(formData).forEach((key) => {
            if (Array.isArray(formData[key])) {
                formDataWithImage.append(key, JSON.stringify(formData[key]));
            } else {
                formDataWithImage.append(key, formData[key]);
            }
        });

        if (image) {
            formDataWithImage.append("package_image", image);
        }

        try {
            await axios.post("http://localhost:3001/add_package", formDataWithImage, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            // Reset form
            setFormData({
                package_name: "",
                package_price: 0,
                package_photographer: [],
                package_caterer: "",
                package_hall: "",
                package_bertender: "",
                package_decoration: "",
                package_description: ""
            });
            setImage(null);
            alert("Package added successfully!");
            navigate("/get_package");
        } catch (error) {
            console.error("Error adding package:", error);
        }
    };

    return (
        <div className="container">
            <h2>Add Package</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="package_name" placeholder="Package Name" value={formData.package_name} onChange={handleChange} required />
                <input type="number" name="package_price" placeholder="Price" value={formData.package_price} onChange={handleChange} required />

                <label>Select Photographers</label>
                <Select
                    isMulti
                    name="package_photographer"
                    options={studioOptions}
                    value={studioOptions.filter(option => formData.package_photographer.includes(option.value))}
                    onChange={handlePhotographerChange}
                    placeholder="Select photographers..."
                    className="select-input"
                />
                

                <input type="text" name="package_caterer" placeholder="Enter number of Caterer" value={formData.package_caterer} onChange={handleChange} />
                <input type="text" name="package_hall" placeholder="Enter number of Hall" value={formData.package_hall} onChange={handleChange} />
                <input type="text" name="package_bertender" placeholder="Enter number of Bartender" value={formData.package_bertender} onChange={handleChange} />
                <input type="text" name="package_decoration" placeholder="Enter number of Decoration" value={formData.package_decoration} onChange={handleChange} />
                <textarea name="package_description" placeholder="Description" value={formData.package_description} onChange={handleChange} required />
                <input type="file" name="package_image" accept="image/*" onChange={handleImageChange} required />
                <button type="submit">Add Package</button>
            </form>
        </div>
    );
};

export default Package;
