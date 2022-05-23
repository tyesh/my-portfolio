import React, { useRef, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const { Control, Group, Label } = Form;

const {
  REACT_APP_EMAIL_SERVICE,
  REACT_APP_TEMPLATE_ID,
  REACT_APP_EMAILJS_KEY,
} = process.env;

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  const form = useRef();

  const closeNotification = () => {
    setShowNotification(false);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        `${REACT_APP_EMAIL_SERVICE}`,
        `${REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${REACT_APP_EMAILJS_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        form.current.reset();
        setShowNotification(true);
      });
  };

  const EmailNotification = () => {
    return (
      <Alert variant="success" onClose={() => closeNotification()} dismissible>
        <Alert.Heading>Email sended!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
      </Alert>
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
          {showNotification && <EmailNotification />}
          <Form ref={form} onSubmit={sendEmail} autoComplete="off">
            <Group className="mb-3" controlId="from_name">
              <Label>Email address</Label>
              <Control
                type="email"
                name="from_name"
                placeholder="example@mail.com"
              />
            </Group>
            <Group className="mb-3" controlId="user_name">
              <Label>Name</Label>
              <Control type="text" name="user_name" placeholder="John Doe" />
            </Group>
            <Group className="mb-3" controlId="subject">
              <Label>Subject</Label>
              <Control type="text" name="subject" placeholder="Subject" />
            </Group>
            <Group className="mb-3" controlId="message">
              <Label>Message</Label>
              <Control
                as="textarea"
                placeholder="Leave a message here"
                style={{ height: "200px" }}
                name="message"
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
