import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container>
      <section className='about-section'>
        <Row>
          <Col
            xs='12'
            sm='3'
            md='3'
            className='d-flex flex-row justify-content-center align-items-center'
          >
            <img
              src='https://avatars.githubusercontent.com/u/18407712?s=400&u=4aaf8572a2810a8ee1e0eea7a489bdd260dc5e35&v=4'
              alt='logo'
              className='me-image'
            />
          </Col>
          <Col xs='12' sm='9' md='9' className='my-5'>
            <h2>Hi there, nice to meet you.</h2>
            <p>
              I'm a developer from Paraguay with experience in web relates
              technologies.
            </p>
            <p>
              For many years i have worked in the services sector, offering
              solutions to the products of the clients. Thus, i had to adapt to
              differents frameworks, architectures, models and culture of work.
              This turned out very good for me. The diferences showed to me that
              it's better to know the concepts rather that memorizing, the valor
              of feedbacks and to try new things.
            </p>
            <p>
              I draw my inspiration from the endless capacity of technology to
              provide creative solutions, to connect people and to improve life.
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AboutMe;
