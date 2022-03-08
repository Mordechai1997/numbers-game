import Number from "./Number";
import EndGame from "./EndGame";

import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function App() {
  const [count, setCount] = useState(0);
  const [stayed, setStayed] = useState(9);

  const change = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="text-center">
      {stayed ? (
        <Container>
          <Row>
            <Col>
              <Number count={count} stayed={setStayed} />
              <Number count={count} stayed={setStayed} />
              <Number count={count} stayed={setStayed} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Number count={count} stayed={setStayed} />
              <Number count={count} stayed={setStayed} />
              <Number count={count} stayed={setStayed} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Number count={count} stayed={setStayed} />
              <Number count={count} stayed={setStayed} />
              <Number count={count} stayed={setStayed} />
            </Col>
          </Row>
          <Button onClick={change} variant="success">
            change
          </Button>
        </Container>
      ) : (
        <EndGame counter={count} />
      )}
    </div>
  );
}
