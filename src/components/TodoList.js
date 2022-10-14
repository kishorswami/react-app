import { isDocument } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    //setting up state
    this.state = {
      userInput: "",
      lists: [],
    };

    //this.handleUserInputChange = this.handleClick.bind(this);
  }

  handleUserInputChange(value) {
    this.setState({
      userInput: value,
    });
  }

  addItem() {
    if (this.state.userInput === "") {
      alert("Please fill todo first...");
      return false;
    }

    const userInput = {
      id: Math.random(),
      userInput: this.state.userInput,
      isDone: false,
    };

    const list = [...this.state.lists];
    list.push(userInput);
    this.setState({
      lists: list,
      userInput: "",
    });
  }

  deleteItem(iItemID) {
    const deletedList = this.state.lists.filter((item) => item.id !== iItemID);
    this.setState({
      lists: deletedList,
      userInput: "",
    });
  }

  markItemAsDone(iItemID) {
    if (!iItemID) {
      alert("Invalid operation..");
      return false;
    }

    const newItemList = this.state.lists.map((item) => {
      if (item.id === iItemID) {
        item.isDone = true;
      }
      return item;
    });
    this.setState({
      lists: newItemList,
      userInput: "",
    });
  }

  render() {
    return (
      <>
        <Container className="default-margin">
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "3rem",
              fontWeight: "bolder",
            }}
          >
            Todo List
          </Row>
          <hr />
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="add item . . . "
                  size="lg"
                  aria-label="add something"
                  aria-describedby="basic-addon2"
                  value={this.state.userInput}
                  onChange={(e) => this.handleUserInputChange(e.target.value)}
                />
                <Button variant="dark" size="lg" onClick={() => this.addItem()}>
                  ADD
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <ListGroup>
                {this.state.lists.map((item) => {
                  const { id, userInput, isDone } = item;
                  return (
                    <ListGroup.Item
                      variant="dark"
                      action
                      key={id}
                      className={isDone ? "text-decoration-line-through" : ""}
                    >
                      {userInput}

                      <Icon.Trash
                        className="float-end"
                        style={{ color: "red" }}
                        onClick={() => {
                          this.deleteItem(id);
                        }}
                      ></Icon.Trash>
                      {!isDone && (
                        <Icon.CheckCircleFill
                          className="float-end"
                          style={{ color: "green" }}
                          onClick={() => {
                            this.markItemAsDone(id);
                          }}
                        ></Icon.CheckCircleFill>
                      )}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
