import React from "react";

import { Card, CardBody, Col } from "reactstrap";
import "../assets/css/Drinks.css";

const Drinks = (props) => {
  return (
    <Card className="card-stats">
      <CardBody>
        <div className="drinksContainer">
          <img src={props.data.strDrinkThumb} className="drinksImg" />
          <p className="drinksText">{props.data.strDrink}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default Drinks;
