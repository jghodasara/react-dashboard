import React from "react";

import { Card, CardBody, Col } from "reactstrap";
import "../assets/css/Products.css";

const Products = (props) => {
  return (
    <Card className="card-stats">
      <CardBody>
        <div className="productsContainer">
          <img src={props.data.api_featured_image} className="productsImg" />
          <p className="productsText">{props.data.name}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default Products;
