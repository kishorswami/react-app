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
          <Col sm="6">
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
          <Col sm="6" className='mt10'>
            <h3>List of content</h3>
            <div class="ui celled list">
              <div class="item">
                <i class="large github middle aligned icon"></i>
                <div class="content">
                  <Link class="header" to='/home'>Home</Link>
                  <div class="description">Updated 10 mins ago</div>
                </div>
              </div>
              <div class="item">
                <i class="large github middle aligned icon"></i>
                <div class="content">
                  <Link class="header" to='/product-app'>Manage Product List</Link>
                  <div class="description">Updated 22 mins ago</div>
                </div>
              </div>
              <div class="item">
                <i class="large github middle aligned icon"></i>
                <div class="content">
                  <Link class="header" to='/counter-app'>Manage Counter</Link>
                  <div class="description">Updated 34 mins ago</div>
                </div>
              </div>
              <div class="item">
                <i class="large github middle aligned icon"></i>
                <div class="content">
                  <Link class="header" to='/todo-app'>Manage Todos</Link>
                  <div class="description">Updated 34 mins ago</div>
                </div>
              </div>
              <div class="item">
                <i class="large github middle aligned icon"></i>
                <div class="content">
                  <Link class="header" to='/quiz'>Quiz</Link>
                  <div class="description">Updated 34 mins ago</div>
                </div>
              </div>
              <div class="item">
                <i class="large github middle aligned icon"></i>
                <div class="content">
                  <Link class="header" to='/pagination-listing'>Pagination Demo</Link>
                  <div class="description">Updated 89 mins ago</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
