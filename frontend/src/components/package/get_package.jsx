import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import DisplayService from "./display_service";
import './get-package.css'

const GetPackage = (props) => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // console.log("Get Package: ",props.packageType);
        
        const response = await axios.get("http://localhost:3001/get_packages", {
          params: {
            packageType: props.packageType,
          },
        });
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  // 🔍 Fetch studioID based on photographer name
  const handlePhotographerClick = async (name, serviceType) => {
    try {
      const response = await axios.get("http://localhost:3001/getStudios", {
        params: {
          service: serviceType,
        },
      });
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
    <div className="package-container">
      <h2>All Packages</h2>
      <Link to={"/add_package"} className="add_package">Add Package</Link>
      <div className="package-card-grid">
        {
          packages.length < 0 ? (
            <p>No packages found.</p>) : (
            packages.map((pkg) => (
              <div className="package-card" key={pkg._id}>
                <img
                  src={`http://localhost:3001/${pkg.package_image}`}
                  alt={pkg.package_name}
                  className="package-card-img"
                />
                <div className="package-card-body">
                  <h3>{pkg.package_name}</h3>
                  <strong> ₹{pkg.package_price}</strong>
                  <div className="package-services">
                    <DisplayService parsed={pkg.package_photographer} handlePhotographerClick={handlePhotographerClick} serviceType="Photographer" setService={props.setService} />
                    <DisplayService parsed={pkg.package_hall} handlePhotographerClick={handlePhotographerClick} serviceType="Hall" setService={props.setService} />
                    <DisplayService parsed={pkg.package_caterer} handlePhotographerClick={handlePhotographerClick} serviceType="Caterer" setService={props.setService} />
                    <DisplayService parsed={pkg.package_bertender} handlePhotographerClick={handlePhotographerClick} serviceType="Bertender" setService={props.setService} />
                    <DisplayService parsed={pkg.package_decoration} handlePhotographerClick={handlePhotographerClick} serviceType="Decoration" setService={props.setService} />
                  </div>
                  <p><strong>Description:</strong> {pkg.package_description}</p>
                  <div className="package-enquire-link">
                    <Link to={`/user_form/${pkg._id}`} className="admin-link">Enquire Now!</Link>
                  </div>

                </div>
              </div>
            ))
          )
        }

      </div>
    </div>
  );
};

export default GetPackage;
