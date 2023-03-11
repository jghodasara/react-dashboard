import React from "react";

import { Card, CardBody, Col } from "reactstrap";
import "../assets/css/Memes.css";

const Memes = (props) => {
  return (
    <Card className="card-stats">
      <CardBody>
        <div className="memesContainer">
          <img src={props.data.url} className="memesImg" />
          <p className="memesText">{props.data.name}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default Memes;
