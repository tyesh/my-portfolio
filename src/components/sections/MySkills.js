import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sanityClient from "../../client.js";

const MySkills = () => {
  const [skills, setSkills] = useState(null);
  const [animateSkill, setaAnimateSkill] = useState({ y: 0, opacity: 1});

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
    <Container className="my-5">
      <h2>Skills</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in est
        augue. Quisque dui ante, pretium non venenatis nec, aliquam suscipit
        lectus. Mauris ut cursus eros. Vestibulum nec eleifend leo. Vivamus eros
        dui, auctor quis nunc vitae, dignissim aliquam mi. Etiam ut ultrices
        massa. Sed nisi arcu, dapibus id venenatis a, vehicula ultrices nunc. In
        eros lacus, congue id diam eget, tristique interdum leo. Fusce rutrum
        quam vitae eros condimentum,
      </p>
      <Row className="row-cols-2 row-cols-sm-3 row-cols-lg-6 g-6">
        {skills &&
          skills.map((skill) => (
            <li key={skill._id} className="d-flex flex-column justify-content-center align-items-center">
              <Col className="mt-5 text-center justify-content-center align-items-center">
                <div className="d-flex flex-row skill-item justify-content-center align-items-center">
                  <img src={skill.mainImage.asset.url} alt="logo" />
                </div>
                <p className="mt-1">{skill.name}</p>
              </Col>
            </li>
          ))}
      </Row>
    </Container>
  );
};

export default MySkills;
