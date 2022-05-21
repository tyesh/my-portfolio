import React, { useRef } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const { Control, Group, Label } = Form;

const { REACT_APP_EMAIL_SERVICE, REACT_APP_TEMPLATE_ID, REACT_APP_EMAILJS_KEY } = process.env;

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    
    emailjs
      .sendForm(
        `${REACT_APP_EMAIL_SERVICE}`,
        `${REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${REACT_APP_EMAILJS_KEY}`,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <main className="contact">
        <Container>
          <Row>
            <Col>
              <h1>Contact</h1>
              <p>
                Feel free to send a email to{" "}
                <a href="mailto: cvelazquez_91@hotmail.com">
                  cvelazquez_91@hotmail.com
                </a>{" "}
                or add me to you Linkedin network to say hello.
              </p>
            </Col>
          </Row>
          <Form ref={form} onSubmit={sendEmail} autoComplete="off">
            <Group className="mb-3" controlId="from_name">
              <Label>Email address</Label>
              <Control type="email" placeholder="example@mail.com" />
            </Group>
            <Group className="mb-3" controlId="user_name">
              <Label>Name</Label>
              <Control type="text" placeholder="John Doe" />
            </Group>
            <Group className="mb-3" controlId="subject">
              <Label>Subject</Label>
              <Control type="text" placeholder="Subject" />
            </Group>
            <Group className="mb-3" controlId="message">
              <Label>Message</Label>
              <Control
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: "200px" }}
              />
            </Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
