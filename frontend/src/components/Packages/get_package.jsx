import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const GetPackage = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get("http://localhost:3001/get_packages");
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  // 🔍 Fetch studioID based on photographer name
  const handlePhotographerClick = async (name) => {
    try {
      const response = await axios.get("http://localhost:3001/getStudios");
      const studios = response.data;

      const matchedStudio = studios.find(
        (studio) => studio.studio_name === name
      );

      if (matchedStudio && matchedStudio._id) {
        navigate(`/getPhotographerImages/${matchedStudio._id}`);
      } else {
        alert("Photographer not found in studios.");
      }
    } catch (error) {
      console.error("Error fetching studios:", error);
    }
  };

  return (
    <div className="container">
      <h2>All Packages</h2>
      <div className="card-grid">
        {packages.map((pkg) => (
          <div className="card" key={pkg._id}>
            <img
              src={`http://localhost:3001/${pkg.package_image}`}
              alt={pkg.package_name}
              className="card-img"
            />
            <div className="card-body">
              <h3>{pkg.package_name}</h3>
              <strong> ₹{pkg.package_price}</strong>
              <p>
                <strong>Photographers:</strong>{" "}
                {(() => {
                  let photographers = [];

                  try {
                    let parsed = pkg.package_photographer;

                    // Handle nested stringified JSON
                    while (typeof parsed === "string") {
                      parsed = JSON.parse(parsed);
                    }

                    if (Array.isArray(parsed)) {
                      photographers = parsed;
                    } else if (typeof parsed === "string") {
                      photographers = [parsed];
                    }
                  } catch (err) {
                    console.error("Failed to parse photographers:", err);
                  }

                  return Array.isArray(photographers)
                    ? photographers.map((name, index) => (
                        <span
                          key={index}
                          style={{
                            marginLeft: "10px",
                            color: "black", // note: this overrides earlier "blue"
                            cursor: "pointer",
                            textDecoration: "none",
                            padding: "8px 16px",
                            border: "1px solid #dfdfdf",
                            borderRadius: "8px",
                            whiteSpace: "nowrap",  // ✅ fix
                            boxShadow: "0 0 4px, 0 0 4px black"
                          }}
                          
                          onClick={() => handlePhotographerClick(name)}
                        >
                          {name}
                        </span>
                      ))
                    : null;
                })()}
              </p>

              <p><strong>Caterers:</strong> {pkg.package_caterer}</p>
              <p><strong>Halls:</strong> {pkg.package_hall}</p>
              <p><strong>Bartenders:</strong> {pkg.package_bertender}</p>
              <p><strong>Decoration:</strong> {pkg.package_decoration}</p>
              <p><strong>Description:</strong> {pkg.package_description}</p>
              <div className="enquire-link">
              <Link to={`/user_form/${pkg._id}`} className="admin-link">Enquire Now!</Link>
              </div>
                
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetPackage;
