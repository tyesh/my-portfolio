import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container style={{ minHeight: '70vh' }}>
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
            <h2>My Profile</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in est
            augue. Quisque dui ante, pretium non venenatis nec, aliquam suscipit
            lectus. Mauris ut cursus eros. Vestibulum nec eleifend leo. Vivamus
            eros dui, auctor quis nunc vitae, dignissim aliquam mi. Etiam ut
            ultrices massa. Sed nisi arcu, dapibus id venenatis a, vehicula
            ultrices nunc. In eros lacus, congue id diam eget, tristique
            interdum leo. Fusce rutrum quam vitae eros condimentum,
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AboutMe;
