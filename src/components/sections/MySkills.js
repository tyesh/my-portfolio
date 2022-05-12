import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sanityClient from "../../client.js";

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
    <Container className="my-5">
      <h2>My Skills</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in est
        augue. Quisque dui ante, pretium non venenatis nec, aliquam suscipit
        lectus. Mauris ut cursus eros. Vestibulum nec eleifend leo. Vivamus eros
        dui, auctor quis nunc vitae, dignissim aliquam mi. Etiam ut ultrices
        massa. Sed nisi arcu, dapibus id venenatis a, vehicula ultrices nunc. In
        eros lacus, congue id diam eget, tristique interdum leo. Fusce rutrum
        quam vitae eros condimentum,
      </p>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Col className="my-3">
          <h4>Languages</h4>
          <ul className="list-group">
            {skills &&
              skills
                .filter((skill) => skill.category.name === "Language")
                .map((element) => (
                  <li
                    key={element._id}
                    className="list-group-item d-flex"
                  >
                    <div style={{ width: "90px" }}>
                      <img
                        src={element.mainImage.asset.url}
                        alt="logo"
                        width="60px"
                      />
                    </div>
                    {element.name}
                  </li>
                ))}
          </ul>
        </Col>
        <Col className="my-3">
          <h4>Frameworks</h4>
          <ul className="list-group">
            {skills &&
              skills
                .filter((skill) => skill.category.name === "Frameworks")
                .map((element) => (
                  <li
                    key={element._id}
                    className="list-group-item d-flex"
                  >
                    <div style={{ width: "90px" }}>
                      <img
                        src={element.mainImage.asset.url}
                        alt="logo"
                        width="60px"
                      />
                    </div>
                    {element.name}
                  </li>
                ))}
          </ul>
        </Col>
        <Col className="my-3">
          <h4>Databases</h4>
          <ul className="list-group">
            {skills &&
              skills
                .filter((skill) => skill.category.name === "Database")
                .map((element) => (
                  <li
                    key={element._id}
                    className="list-group-item d-flex"
                  >
                    <div style={{ width: "90px" }}>
                      <img
                        src={element.mainImage.asset.url}
                        alt="logo"
                        width="60px"
                      />
                    </div>
                    {element.name}
                  </li>
                ))}
          </ul>
        </Col>
        <Col className="my-3">
          <h4>API</h4>
          <ul className="list-group">
            {skills &&
              skills
                .filter((skill) => skill.category.name === "API")
                .map((element) => (
                  <li
                    key={element._id}
                    className="list-group-item d-flex"
                  >
                    <div style={{ width: "90px" }}>
                      <img
                        src={element.mainImage.asset.url}
                        alt="logo"
                        width="60px"
                      />
                    </div>
                    {element.name}
                  </li>
                ))}
          </ul>
        </Col>
        <Col className="my-3">
          <h4>Others</h4>
          <ul className="list-group">
            {skills &&
              skills
                .filter((skill) => skill.category.name === "Others")
                .map((element) => (
                  <li
                    key={element._id}
                    className="list-group-item d-flex"
                  >
                    <div style={{ width: "90px" }}>
                      <img
                        src={element.mainImage.asset.url}
                        alt="logo"
                        width="60px"
                      />
                    </div>
                    {element.name}
                  </li>
                ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default MySkills;
