import React, { useState, useEffect } from "react";
import "./carousel.css";

import image1 from "./carouselImages/image1.png";
import image2 from "./carouselImages/image2.png";
import image3 from "./carouselImages/image3.png";
import image4 from "./carouselImages/image4.png";

const images = [image1, image2, image3, image4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
     <div className="carousel-text"> 
     <h1>Welcome to Eventify</h1>
     <p>We provide you the services to make your event more special and memoreble.</p>
     </div>
      <img className="intro-carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
};

export default Carousel;
