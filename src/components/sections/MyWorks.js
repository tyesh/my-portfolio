import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sanityClient from '../../client.js';

const MyWorks = () => {
  const [works, setWorks] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "work" ] | order(name asc) {
            _id,
            name,
            webType,
            charge,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            description,
            webURL
        }`
      )
      .then((data) => {
        setWorks(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className='my-5'>
      <h2>My Work</h2>
      <p>
        For many years i have worked in the services sector, offering solutions
        to the products of the clients. Thus, i had to adapt to differents
        frameworks, architectures, models and culture of work. This turned out
        very good for me. The diferences showed to me that it's better to know
        the concepts rather that memorizing, the valor of feedbacks, the
        constant growth, to look forward and see the bigger picture.
      </p>
      <p>
        Here it's a list some of the projects of witch i have contributed with
        some code and a brief description of the tasks.
      </p>
      {works &&
        works.map((work, index) => (
          <div key={work._id}>
            <hr className='featurette-divider' />
            <Row className='row featurette'>
              <Col md={index % 2 ? { span: 7, order: 2 } : { span: 7 }}>
                <h3>{work.name}</h3>
                <h4 className='text-muted'>{work.webType}</h4>
                <p>{work.description}</p>
              </Col>
              <Col md={index % 2 ? { span: 5, order: 1 } : { span: 5 }}>
                <img
                  className='img-fluid mx-auto'
                  src={work.mainImage.asset.url}
                  alt={work.name}
                  width='500'
                  height='500'
                />
              </Col>
            </Row>
          </div>
        ))}
    </Container>
  );
};

export default MyWorks;
