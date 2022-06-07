import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import sanityClient from '../../client.js';

const MyExperience = () => {
  const [experiences, setExperiences] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "experience"] | order(order desc) {
            charge,
            description,
            range,
            location
        }`
      )
      .then((data) => {
        setExperiences(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className='my-5'>
      {experiences && (
        <section>
          <h2>Experience</h2>
          <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3'>
            {experiences.map((experience, index) => (
              <div key={index} className='col'>
                <div className='card border-secondary mb-3'>
                  <div className='card-header'>{experience.range}</div>
                  <div className='card-body'>
                    <h4 className='card-title'>{`${experience.charge} - ${experience.location}`}</h4>
                    <p className='card-text'>{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </section>
      )}
    </Container>
  );
};

export default MyExperience;
