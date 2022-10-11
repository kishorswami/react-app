import React, { useRef } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

const UserForm = ({ handleUserFormSubmit }) => {
  const sUserNameRef = useRef(null);
  const sUserEmailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      sUserNameRef.current.value === "" ||
      sUserEmailRef.current.value === ""
    ) {
      alert("Field can not be empty");
      return false;
    }
    handleUserFormSubmit({
      name: sUserNameRef.current.value,
      email: sUserEmailRef.current.value,
    });

    clearForm();
  };

  const clearForm = () => {
    sUserNameRef.current.value = "";
    sUserEmailRef.current.value = "";
  };

  return (
    <>
      <Container className="default-margin">
        <Row>
          <Col sm={6}>
            <h2 className="text-center" style={{ marginTop: "1rem" }}>User Form</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter user Name"
                  ref={sUserNameRef}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  ref={sUserEmailRef}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserForm;
