import React, { useState, useEffect } from "react";
import "./style.css";

const images = [
  "https://picsum.photos/id/1015/1920/600",
  "https://picsum.photos/id/1016/1920/600",
  "https://picsum.photos/id/1018/1920/600",
  "https://picsum.photos/id/1020/1920/600"
];

const CarouselOneStep = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="carouselOneStep">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
};

export default CarouselOneStep;
