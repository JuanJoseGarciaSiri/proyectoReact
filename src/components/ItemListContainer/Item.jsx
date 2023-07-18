import React from "react";
import { Link } from "react-router-dom";
import "./ItemStyles.css";

const Card = ({ id, name, image, description, stock, price, category }) => {
  return (
    <div className="container">
      <div className="card">
        <Link to={`/item/${id}`}>
          <img className="imagenCard" src={image} alt={name} />
          <div className="cardBody">
            <h2 className="nombreProd">{name}</h2>
            <p className="Prod">{id}</p>
            <p className="Prod">{description}</p>
            <h3 className="Prod">US$ {price}</h3>
            <p className="Prod">{stock} left</p>
            <p className="Prod">{category}</p>
          </div>
          <div className="botones">
            <button className="botonCart">
              <p className="Prod">Add to Cart</p>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
