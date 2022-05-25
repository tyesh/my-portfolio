import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sanityClient from "../../client.js";
import { motion } from "framer-motion";

const MyReferences = () => {
  const [references, setReferences] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "references" && show == true ] | order(name asc) {
            _id,
            name,
            charge,
            location,
            email,
            avatar{
                asset->{
                    _id,
                    url
                }
            },
            category->{name}
        }`
      )
      .then((data) => {
        setReferences(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="my-5">
      {references && (
        <section>
          <h2>References</h2>
          <Row className="row-cols-1 row-cols-sm-2">
            {references.map((reference) => (
              <motion.div
                key={reference._id}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <Col>
                  <div className="card border-secondary mb-3">
                    <div className="card-header">{`${reference.charge} - ${reference.location}`}</div>
                    <div className="card-body d-flex">
                      <Row>
                        <Col xs="4">
                          <img
                            src={reference.avatar.asset.url}
                            alt="logo"
                            className="avatar-reference"
                          />
                        </Col>
                        <Col xs="8" className="px-4">
                          <h4 className="card-title">{reference.name}</h4>
                          <p className="card-text">{reference.email}</p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </motion.div>
            ))}
          </Row>
        </section>
      )}
    </Container>
  );
};

export default MyReferences;
