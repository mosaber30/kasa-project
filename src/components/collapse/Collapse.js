import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Collapse = ({ title, content }) => {
  // Declaration of the state using the useState() Hook
  const [isOpen, setIsOpen] = useState(true); // I define the state for the toggle (set to false by default)

  // Function to handle the display of the collapse content
  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Displays the collapsed section by default and opens it on click, then closes it again on click, hiding the text and style
    <div className="collapse__dropdown__container"> 
     {/* to add a class when isopen is true  */}
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </p>
      </div>
      {/* If the collapse state is TRUE, it will display the description */}
      <div className="collapse__dropdown__content">
     
        <p>{content}</p>
      </div>
    </div>
  );
};


export default Collapse;
