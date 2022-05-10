import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sanityCliend from "../../client.js";

const MyExperience = () => {
  const [experiences, setExperiences] = useState(null);

  /*useEffect(() => {
        sanityCliend.fetch(`*[]{
            name,
            description
            fromDate,
            toDate,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then(data => setExperiences(data))
        .catch(error => console.log(error));
    }, []);*/
  return (
    <Container className="my-5">
        <h2>My Experience</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Col>
          <div className="card border-secondary mb-3">
            <div className="card-header">2010</div>
            <div className="card-body">
              <h4 className="card-title">Secondary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card border-secondary mb-3">
            <div className="card-header">2010</div>
            <div className="card-body">
              <h4 className="card-title">Secondary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card border-secondary mb-3">
            <div className="card-header">2010</div>
            <div className="card-body">
              <h4 className="card-title">Secondary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="card border-secondary mb-3">
            <div className="card-header">2010</div>
            <div className="card-body">
              <h4 className="card-title">Secondary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyExperience;
