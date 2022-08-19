import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TagLine() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" lg="5">
            <h1>Creative Solutions by Professional</h1>
            </Col>
        <Col xs lg="1">
          1 of 3
        </Col>
        <Col xs lg="1">
          3 of 3
        </Col>
      </Row>
    </Container>
  );
}

export default TagLine;
