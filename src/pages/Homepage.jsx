import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Cards from "../components/Cards";
function Homepage() {
  let futures = [1, 2, 3];

  return (
    <Container fluid className="vh-100 d-flex flex-column">
      {/********** HEADER *********** */}
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      {/********** CONTENT *********** */}
      <Row className="flex-grow-1 mt-2 p-4 justify-content-center text-center">
        <Col xs={6}>
          <h1>Welcome to TechNova Solutions</h1>
          <p>
            At TechNova Solutions, we are dedicated to revolutionizing the tech
            industry with cutting-edge products designed to enhance your digital
            experience. Explore our latest innovations and discover how our
            solutions can empower your business and simplify your life. Join us
            on our journey to shape the future of technology.
          </p>
        </Col>
      </Row>

      {/********** CARDS *********** */}
      <Row className="flex-grow-1 g-2 justify-content-center text-center">
        <Col xs={3}>
          <Cards
            buttontext="futures 1"
            link="/futures1"
            images="../assets/images/futures1.png"
          ></Cards>
        </Col>
        <Col xs={3}>
          <Cards
            buttontext="futures 2"
            link="/futures2"
            images="../assets/images/futures2.png"
          ></Cards>
        </Col>
        <Col xs={3}>
          <Cards
            buttontext="futures 3"
            link="/futures3"
            images="../assets/images/futures3.png"
          ></Cards>
        </Col>
      </Row>

      {/********** FOOTER *********** */}
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
