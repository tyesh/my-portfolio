import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import sanityClient from "../../client.js";

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
    <Container className="my-5">
      <h2>My Work</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in est
        augue. Quisque dui ante, pretium non venenatis nec, aliquam suscipit
        lectus. Mauris ut cursus eros. Vestibulum nec eleifend leo. Vivamus eros
        dui, auctor quis nunc vitae, dignissim aliquam mi. Etiam ut ultrices
        massa. Sed nisi arcu, dapibus id venenatis a, vehicula ultrices nunc. In
        eros lacus, congue id diam eget, tristique interdum leo. Fusce rutrum
        quam vitae eros condimentum,
      </p>
      <Row className="row-cols-1 row-cols-sm-2">
        {works &&
          works.map((work) => (
            <Col key={work._id}>
              <div className="card mb-3">
                <h3 className="card-header">{work.name}</h3>
                <div className="card-body">
                  <h5 className="card-title">{work.webType}</h5>
                  <h6 className="card-subtitle text-muted">{work.charge}</h6>
                </div>
                <img src={work.mainImage.asset.url} alt={work.name} />
                <div className="card-body">
                  <p className="card-text">{work.description}</p>
                </div>
                <div className="card-body">
                  <a href={work.webURL} target="_blank" className="card-link">
                    Visit
                  </a>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MyWorks;
