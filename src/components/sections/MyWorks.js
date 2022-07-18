import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sanityClient from '../../client.js';

const MyWorks = () => {
  const [works, setWorks] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "work" ] | order(_id asc) {
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
            webURL,
            playStoreURL,
            iosStore
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
        Here it's a list of some the projects that I have contributed, and a
        brief description of my participation.
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
                <a
                  className='btn btn-primary my-3'
                  href={work.webURL}
                  target='_blank'
                  rel='noreferrer'
                >
                  Visit WebPage
                </a>
                {work.playStoreURL && (
                  <p>
                    <a
                      href={work.playStoreURL}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Visit Google Play Store
                    </a>
                  </p>
                )}
                {work.iosStore && (
                  <p>
                    <a href={work.iosStore} target='_blank' rel='noreferrer'>
                      Visit Apple Store
                    </a>
                  </p>
                )}
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
