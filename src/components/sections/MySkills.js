import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sanityClient from '../../client.js';

const MySkills = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skills" ] | order(name asc) {
            _id,
            name,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            category->{name}
        }`
      )
      .then((data) => {
        setSkills(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className='my-5'>
      <h2>Skills</h2>
      <p>
        Through the develop of projects for diferents clients, I had the
        oportunity to learn and work with many languages and frameworks. Today
        my main focus are web relates technologies, like JS, REST services and
        Java Spring. Also I'm interested in mobile and desktop applications that
        use JS frameworks like Ionic and Electron. Here it's a list of tools I'm
        most familiar with.
      </p>
      <Row className='row-cols-2 row-cols-sm-3 row-cols-lg-6 g-6'>
        {skills &&
          skills.map((skill) => (
            <Col
              key={skill._id}
              className='mt-3 d-flex flex-column text-center justify-content-center align-items-center'
            >
              <div className='d-flex flex-row skill-item justify-content-center align-items-center'>
                <img src={skill.mainImage.asset.url} alt='logo' />
              </div>
              <p className='mt-1'>{skill.name}</p>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MySkills;
