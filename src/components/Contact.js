import React, { useRef, useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import {
  Alert,
  Button,
  Col,
  Container,
  Figure,
  Form,
  Image,
  Row,
} from 'react-bootstrap';
import mailImage from '../assets/vecteezy_the-administrative-staff-sends-emails-to-the-company-s_.jpg';
import emailjs from '@emailjs/browser';

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
      <Alert variant='success' onClose={() => closeNotification()} dismissible>
        <Alert.Heading>Sended!</Alert.Heading>
        <p>Yout message has been sended. I will response as soon as i can!</p>
      </Alert>
    );
  };

  return (
    <>
      <Header />
      <main className='contact'>
        <Container>
          <h1>Contact</h1>
          {showNotification && <EmailNotification />}
          <Row className='my-3'>
            <Col xs='12' md={{ span: 8, order: 2 }}>
              <Form
                ref={form}
                onSubmit={sendEmail}
                autoComplete='off'
                className='px-4 pb-5'
              >
                <Group className='mb-3' controlId='from_name'>
                  <Label>Email address</Label>
                  <Control
                    type='email'
                    name='from_name'
                    placeholder='example@mail.com'
                  />
                </Group>
                <Group className='mb-3' controlId='user_name'>
                  <Label>Name</Label>
                  <Control
                    type='text'
                    name='user_name'
                    placeholder='John Doe'
                  />
                </Group>
                <Group className='mb-3' controlId='subject'>
                  <Label>Subject</Label>
                  <Control type='text' name='subject' placeholder='Subject' />
                </Group>
                <Group className='mb-3' controlId='message'>
                  <Label>Message</Label>
                  <Control
                    as='textarea'
                    placeholder='Leave a message here'
                    style={{ height: '200px' }}
                    name='message'
                  />
                </Group>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col xs='12' md={{ span: 4, order: 1 }}>
              <div className='m-4'>
                <h2 className='h4'>Let's get in touch</h2>
                <p>
                  Feel free to send a email or add me to you Linkedin network
                  and say hello!
                </p>
                <Figure>
                  <Image src={mailImage} alt='email-image' fluid />
                  <figcaption>
                    <a
                      href='https://www.vecteezy.com/free-vector/cartoon'
                      style={{ fontSize: '12px' }}
                      target='_blank'
                    >
                      Cartoon Vectors by Vecteezy
                    </a>
                  </figcaption>
                </Figure>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
