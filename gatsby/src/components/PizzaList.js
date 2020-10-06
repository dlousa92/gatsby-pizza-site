import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const SinglePizza = ({ pizza }) => {
  return (
    <>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>

        <p>
          Toppings: {pizza.toppings.map((topping) => topping.name).join(", ")}
        </p>
        <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
      </Link>
    </>
  );
};

const PizzaList = ({ pizzas }) => {
  console.log(pizzas);
  return (
    <div>
      {pizzas.map((pizza) => (
        <SinglePizza pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

export default PizzaList;
