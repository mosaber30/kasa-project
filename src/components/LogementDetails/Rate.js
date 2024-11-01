import React from 'react';
import emptyStar from "../../assets/images/rate/startRempli.png";
import fullStar from "../../assets/images/rate/startVide.png";


function Rate(props) {
      const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="rate-container">
        {notes.map((note) =>
            <img
              key={note.toString()}
              className="etoile"
              src={score >= note ? emptyStar : fullStar} // ternary condition to check of the star will be blue or grey
              alt="star"
            />
          )}
      </div>
    );
}

export default Rate;
