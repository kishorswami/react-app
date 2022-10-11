import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function IncDecCounter() {
  const [value, setValue] = useState(0);

  //Handle increment
  const handleIncrement = () => setValue(value + 1);

  //Handle Decrement
  const handleDecrement = () => setValue(value - 1);

  return (
    <>
      <Container className="container default-margin">
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          Increment/Decrement Counter
          <hr />
        </Row>
        <Row>
          <Col sm={{ span: "6", offset: "3" }} className="mt-5">
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  class="btn btn-primary"
                  type="button"
                  onClick={handleDecrement}
                >
                  -
                </button>
              </div>
              <input
                type="text"
                class="form-control"
                value={value}
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />
              <div class="input-group-prepend">
                <button
                  class="btn btn-primary"
                  type="button"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
