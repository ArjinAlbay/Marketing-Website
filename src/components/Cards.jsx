import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards({ buttontext, link, images }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" as={Link} to={link}>
          {buttontext}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
