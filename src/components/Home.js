import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Card,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container className="default-margin">
        <Row>
          <Col sm="8">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://smartslider3.com/wp-content/uploads/slider/cache/08e0d31f1e09a6a31de3c1c7f7180b20/freelayerslider3.webp"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>VALGRISENCHE, ITALY</h3>
                  <p>Snow Capped Mountain.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://smartslider3.com/wp-content/uploads/slider/cache/3ce9feffd11232e6306a84ccf3fa8f72/freelayerslider4.webp"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>EL NIDO, PHILIPPINES</h3>
                  <p>A Secluded Beach in the Philippines</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://smartslider3.com/wp-content/uploads/slider/cache/907c8ad4504e4d76c50f15a3247fb719/freelayerslider5.webp"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>FELIDHOO, MALDIVES</h3>
                  <p>Barrier in Felidhoo.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
