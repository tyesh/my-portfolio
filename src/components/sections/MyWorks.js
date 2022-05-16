import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MyWorks = () => {
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
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
        <Col>
          <div className="card mb-3">
            <h3 className="card-header">SocialPubli</h3>
            <div className="card-body">
              <h5 className="card-title">Influencer Marketing Platform</h5>
              <h6 className="card-subtitle text-muted">
                Backend, Frontend and mobile
              </h6>
            </div>
            <img src="https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg" alt="" />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="www.google.com.py" className="card-link">
                Visit
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyWorks;
