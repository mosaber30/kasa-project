import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Keep the initial state as true

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse__dropdown__container ${isOpen ? "open" : ""}`}>
      <div className="collapse__dropdown__title" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <p>
          <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </p>
      </div>
      <div className={`collapse__dropdown__content ${isOpen ? "show" : "hide"}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
