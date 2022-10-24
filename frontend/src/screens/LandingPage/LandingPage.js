import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">
                Welcome to <strong>Feather</strong>
              </h1>
              <h3 className="subtitle">
                <em>Your go-to Journal</em>
              </h3>
              <p className="text">
                <em>Ready to pen down your thoughts?</em>
              </p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landing-button">
                  Login
                </Button>
              </a>
              &nbsp;&nbsp;&nbsp; 
              &nbsp;&nbsp;&nbsp;
              <a href="/register">
                <Button
                  size="lg"
                  className="landing-button"
                  variant="outline-primary"
                >
                  SignUp
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
