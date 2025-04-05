import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./get-photographer-details.css"; // Optional for styling
import FetchSubEvent from "./fetch_sub_event";
import { Link } from "react-router-dom";
const GetPhotographerDetail = () => {
    const { studioId } = useParams();
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/getPhotographerImages/${studioId}`);
                setImages(response.data.images);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };
        fetchImages();
    }, [studioId]);

    return (
      <div className="main-container">
          <div className="image-container">
            <span><h2>Photographer Samples</h2>
            <Link to={`/uploadImages/${studioId}`} className="Button">Add Sample Images</Link>
</span>
            {images.length > 0 ? (
                <div className="get-photographer-image-grid">
                    {images.map((image, index) => (
                        <img key={index} src={`http://localhost:3001${image}`} alt={`Sample ${index + 1}`} className="get-photographer-grid-image" />
                    ))}
                
                </div>
                
            ) : (
                <p>No images uploaded yet.</p>
            )}
        </div>
        <div className="price-list-container">
            <h2>Price List</h2>
                <FetchSubEvent/>
        </div>
      </div>
    );
};

export default GetPhotographerDetail;
