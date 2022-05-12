import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MyCertificates = () => {
  return (
    <Container>
      <section>
        <Row className="row-cols-1 row-cols-sm-2">
          <Col>
            <h4>Technical studies</h4>
            <ul className="list-group">
              <li className="list-group-item d-flex">
                <a
                  href="https://www.udemy.com/certificate/UC-3ad7a63c-103e-45bd-88ea-9bcc5a465e3a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  How to build an ecommerce store with wordpress &amp;
                  woocommerce - Udemy
                </a>
              </li>
              <li className="list-group-item d-flex">
                <a
                  href="https://www.freecodecamp.org/certification/fcc51fc7bca-88a4-4479-8f8e-ea494f5f24fc/responsive-web-design"
                  target="_blank"
                  rel="noreferrer"
                >
                  Responsive Web Design - freeCodecamp
                </a>
              </li>
              <li className="list-group-item d-flex">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/Y2JS2AW4KS3X"
                  target="_blank"
                  rel="noreferrer"
                >
                  Advanced Styling with Responsive Design - Coursera
                </a>
              </li>
              <li className="list-group-item d-flex">
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/57EGDUKDF8RP"
                  target="_blank"
                  rel="noreferrer"
                >
                  Container Orchestration using Kubernetes - Coursera
                </a>
              </li>
              <li className="list-group-item d-flex">
                <a
                  href="https://courses.edx.org/certificates/4edeb85eda7542b6b2b3af05699e018f"
                  target="_blank"
                  rel="noreferrer"
                >
                  Implementing Real-Time Analytics with Hadoop in Azure
                  HDInsight - edX
                </a>
              </li>
              <li className="list-group-item d-flex">
                <a
                  href="https://courses.edx.org/certificates/4edeb85eda7542b6b2b3af05699e018f"
                  target="_blank"
                  rel="noreferrer"
                >
                  Introduction to Cloud Computing - edX
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4>Other cool stuffs</h4>
            <ul className="list-group">
              <li className="list-group-item d-flex">
                <a
                  href="https://courses.edx.org/certificates/4d52144e5e5d4303b18d775aba367119"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Civil War and Reconstruction- 1861- 1865: A New Birth of
                  Freedom - edX
                </a>
              </li>
              <li className="list-group-item d-flex">
                <a
                  href="https://courses.edx.org/certificates/85540532afa84bafad78dc7cc5fefbfe"
                  target="_blank"
                  rel="noreferrer"
                >
                  Astrophysics: Exploring Exoplanets - edX
                </a>
              </li>
              <li className="list-group-item d-flex">
                <a
                  href="https://s3.amazonaws.com/verify.edx.org/downloads/cc7ed407d75144a49f76db807e825d6f/Certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Greatest Unsolved Mysteries of the Universe - edX
                </a>
              </li>
              <li className="list-group-item d-flex">
                <a
                  href="https://courses.edx.org/certificates/59626826558c48dc9842408b27f1b1a6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Super-Earths and Life - edX
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default MyCertificates;
