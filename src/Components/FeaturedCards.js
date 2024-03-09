import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const FeaturedCards = () => {
  return (
    <>
      <div className="section-7 featured">
        <Container>
          <h1 className="featured-title">Featured Stories</h1>
          <Row>
            <Col xs={12} md={4} xl={4} className="featured-card">
              <a href="#?">
                <div className="featured-content-wrapper">
                  <div className="image-wrapper">
                    <LazyLoadImage
                      src="https://plus.unsplash.com/premium_photo-1671308539073-ebf8985a6a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="img"
                    />
                  </div>
                  <div className="content-wrapper d-flex flex-column">
                    <p className="tags">User Experience</p>
                    <h3 className="title">
                      Five year trusted partnership empower's spotify's creator marketplace
                    </h3>
                    <a href="#?" className="link">
                      Read More
                    </a>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} md={4} xl={4} className="featured-card">
              <a href="#?">
                <div className="featured-content-wrapper">
                  <div className="image-wrapper">
                    <LazyLoadImage
                      src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="img"
                    />
                  </div>
                  <div className="content-wrapper d-flex flex-column">
                    <p className="tags">User Experience</p>
                    <h3 className="title">
                    Five year trusted partnership empower's spotify's creator marketplace
                    </h3>
                    <a href="#?" className="link">
                      Read More
                    </a>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} md={4} xl={4} className="featured-card">
              <a href="#?">
                <div className="featured-content-wrapper">
                  <div className="image-wrapper">
                    <LazyLoadImage
                      src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="img"
                    />
                  </div>
                  <div className="content-wrapper d-flex flex-column">
                    <p className="tags">User Experience</p>
                    <h3 className="title">
                    Five year trusted partnership empower's spotify's creator marketplace
                    </h3>
                    <a href="#?" className="link">
                      Read More
                    </a>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-7-events">
        <Container>
          <h1 className="event-title">Upcoming Events</h1>
          <Row>
            <Col xs={12} md={6} xl={6} className="event-card">
              <a href="#?" className="d-flex flex-column h-100">
                <div className="event-content-wrapper">
                  <a href="#?" className="head-link">
                    Through the Lens - The Landscape of PFML
                  </a>
                  <p className="date-time">
                    February 27,2024
                    <br />
                    10:00 AM IST
                  </p>
                  <div className="event-btn-wrapper">
                    <p className="tags">WEBINAR | PAYROLL</p>
                    <a href="#?" className="external-arrow">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} md={6} xl={6} className="event-card">
              <a href="#?" className="d-flex flex-column h-100">
                <div className="event-content-wrapper">
                  <a href="#?" className="head-link">
                    Through the Lens - The Landscape of PFML
                  </a>
                  <p className="date-time">
                    Designing a Better User Interface for Our App
                  </p>
                  <div className="event-btn-wrapper align-self-end">
                    <p className="tags">WEBINAR | PAYROLL</p>
                    <a href="#?" className="external-arrow">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} md={6} xl={6} className="event-card">
              <a href="#?" className="d-flex flex-column h-100">
                <div className="event-content-wrapper">
                  <a href="#?" className="head-link">
                    Through the Lens - The Landscape of PFML
                  </a>
                  <p className="date-time">
                    Designing a Better User Interface for Our App
                  </p>
                  <div className="event-btn-wrapper">
                    <p className="tags">WEBINAR | PAYROLL</p>
                    <a href="#?" className="external-arrow">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} md={6} xl={6} className="event-card">
              <a href="#?" className="d-flex flex-column h-100">
                <div className="event-content-wrapper">
                  <a href="#?" className="head-link">
                    Through the Lens - The Landscape of PFML
                  </a>
                  <p className="date-time">
                    February 27,2024
                    <br />
                    10:00 AM IST
                  </p>
                  <div className="event-btn-wrapper">
                    <p className="tags">WEBINAR | PAYROLL</p>
                    <a href="#?" className="external-arrow">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FeaturedCards;
