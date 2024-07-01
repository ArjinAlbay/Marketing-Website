import { Button, Col, Form, Row, Container } from "react-bootstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <Container fluid className="vh-100 d-flex flex-column">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className="flex-grow-1 p-4 align-items-center justify-content-center ">
        <Col md={7}>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  {" "}
                  <b>Email</b>
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>
                {" "}
                <b>Address</b>
              </Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>
                {" "}
                <b>Address 2</b>
              </Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>
                  {" "}
                  <b>City</b>
                </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  {" "}
                  <b>State</b>
                </Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Buy Now
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
