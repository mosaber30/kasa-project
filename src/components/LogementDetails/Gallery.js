import React, { useState } from "react";

function Gallery({ slides }) {
  const [current, setCurrent] = useState(0); // State to track the current slide
  const length = slides.length; // Total number of slides

  // Function to go to the next slide
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // Loop back to the first slide if at the end
  };

  // Function to go to the previous slide
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // Loop back to the last slide if at the beginning
  };

  // Return null if there are no slides to display
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slide">
      {/* Render the left arrow if there is more than one slide */}
      {length > 1 && (
        <div className="arrow arrow-left" onClick={prevImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      )}
      {/* Render the right arrow if there is more than one slide */}
      {length > 1 && (
        <div className="arrow arrow-right" onClick={nextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      )}
      {/* Loop through each slide and display it if it is the current slide */}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slide__image" />
            )}
            {/* Display the slide number if it is the current slide and there are multiple slides */}
            {index === current && length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Gallery;
