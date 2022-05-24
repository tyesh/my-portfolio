import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sanityClient from "../../client.js";

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
    <Container className="my-5">
      <h2>Experience</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
        {experiences && experiences.map((experience, index) => (
          <Col key={index}>
            <div className="card border-secondary mb-3">
              <div className="card-header">{experience.range}</div>
              <div className="card-body">
                <h4 className="card-title">{`${experience.charge} - ${experience.location}`}</h4>
                <p className="card-text">
                  {experience.description}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyExperience;
