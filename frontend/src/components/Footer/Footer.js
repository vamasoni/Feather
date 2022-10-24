import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        botton: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Feather
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
