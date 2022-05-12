import React from 'react';
import Header from './layout/Header';
import Footer from "./layout/Footer";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="contact">
        <Container>
          <Row>
            <Col>
              <h1>Contact</h1>
              <p>Feel free to send a email to <a href = "mailto: cvelazquez_91@hotmail.com">cvelazquez_91@hotmail.com</a> or add me to you Linkedin network to say hello.</p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Contact