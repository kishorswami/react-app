import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

const UserTableView = ({ userData }) => {
  const tableBody =
    userData.length > 0 ? (
      userData.map((user, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3} className="text-center">
          No Data found
        </td>
      </tr>
    );

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>{tableBody}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserTableView;
