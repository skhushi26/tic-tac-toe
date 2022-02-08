import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Board from "./Board";
import "./playerForm.css";
import { Form, Col, InputGroup, Row, Button } from "react-bootstrap";
import Confitte from "./Confitte";

function PlayerForm(props) {
  const [firstPlayer, setFirstPlayer] = useState("Player 1");
  const [secondPlayer, setSecondPlayer] = useState("Player 2");
  const [firstPlayerSign, setFirstPlayerSign] = useState("X");
  const [secondPlayerSign, setSecondPlayerSign] = useState("O");
  const [showBoard, setShowBoard] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      setShowBoard(true);
    } else setValidated(true);
  };

  return (
    <>
      {/* <div className="confitte">
        <Confitte />
      </div> */}

      {!showBoard && (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="mt-5"
        >
          <Card border="primary" style={{ width: "35rem" }}>
            <Card.Header>Tic-Tac-Toe Player Details</Card.Header>
            <Card.Body>
              <Card.Text>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-2">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustom01"
                      className="tl"
                    >
                      <Form.Label className="tl">First Player Name</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Control
                        required
                        type="text"
                        placeholder="First Player name"
                        defaultValue="Player 1"
                        onChange={(e) => setFirstPlayer(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide first player name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustom01"
                      className="tl"
                    >
                      <Form.Label>First Player Sign</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter first player sign"
                        defaultValue="X"
                        onChange={(e) => setFirstPlayerSign(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide first player sign.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <br />
                  <Row className="mb-2">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustom01"
                      className="tl"
                    >
                      <Form.Label className="tl">Second Player Name</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Second Player Name"
                        defaultValue="Player 2"
                        onChange={(e) => setSecondPlayer(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide second player name.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="mb-2">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustom01"
                      className="tl"
                    >
                      <Form.Label className="tl">Second Player Sign</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter second player sign"
                        defaultValue="O"
                        onChange={(e) => setSecondPlayerSign(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please provide second player sign.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Button type="submit">Start Game</Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}

      {showBoard && (
        <Board
          firstPlayer={firstPlayer}
          secondPlayer={secondPlayer}
          firstPlayerSign={firstPlayerSign}
          secondPlayerSign={secondPlayerSign}
          setFirstPlayer={setFirstPlayer}
          setFirstPlayerSign={setFirstPlayerSign}
          setSecondPlayer={setSecondPlayer}
          setSecondPlayerSign={setSecondPlayerSign}
          showBoard={showBoard}
          setShowBoard={setShowBoard}
        />
      )}
    </>
  );
}

export default PlayerForm;
