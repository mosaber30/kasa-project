import React from "react";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Card from "../cards/Card";

const Grid = () => {
  return (
    <div className="home_gallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Grid;
