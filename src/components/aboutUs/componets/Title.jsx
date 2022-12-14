import React from "react";
import { Container } from "react-bootstrap";
import "../AboutUs.css";
const Title = (props) => {
  return (
    <div className={props.cName}>
      <Container>
      <div className="in-bw">
        <h1>{props.title}</h1>
       
      </div>
      </Container>
    </div>
  );
};

export default Title;