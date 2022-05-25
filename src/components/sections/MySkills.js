import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sanityClient from "../../client.js";
import { motion } from "framer-motion";

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
            <Col key={skill._id}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="mt-3 d-flex flex-column text-center justify-content-center align-items-center"
              >
                <div className="d-flex flex-row skill-item justify-content-center align-items-center">
                  <img src={skill.mainImage.asset.url} alt="logo" />
                </div>
                <p className="mt-1">{skill.name}</p>
              </motion.div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MySkills;
