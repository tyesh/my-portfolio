import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sanityClient from "../../client.js";
import { motion } from "framer-motion";

const MyCertificates = () => {
  const [certificates, setCertificates] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "certificate" ] | order(name asc) {
            _id,
            name,
            url,
            category->{name}
        }`
      )
      .then((data) => {
        setCertificates(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      {certificates && (
        <section>
          <Row className="row-cols-1 row-cols-sm-2">
            <Col>
              <h2>Technical studies</h2>
              <ul className="list-group">
                {certificates
                  .filter(
                    (certificate) =>
                      certificate.category.name.toLowerCase() ===
                      "technical studies"
                  )
                  .map((certificate) => (
                    <motion.div
                      key={certificate._id}
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <li className="list-group-item d-flex">
                        <a
                          href={certificate.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {certificate.name}
                        </a>
                      </li>
                    </motion.div>
                  ))}
              </ul>
            </Col>
            <Col>
              <h2>Other cool stuffs</h2>
              <ul className="list-group">
                {certificates &&
                  certificates
                    .filter(
                      (certificate) =>
                        certificate.category.name.toLowerCase() ===
                        "other cool stuffs"
                    )
                    .map((certificate) => (
                      <motion.div
                        key={certificate._id}
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        <li className="list-group-item d-flex">
                          <a
                            href={certificate.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {certificate.name}
                          </a>
                        </li>
                      </motion.div>
                    ))}
              </ul>
            </Col>
          </Row>
        </section>
      )}
    </Container>
  );
};

export default MyCertificates;
