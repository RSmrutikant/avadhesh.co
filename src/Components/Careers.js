import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Images from "./imageSet";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Careers = () => {
  return (
    <div>
      <div className="section-6 careers">
        <Container>
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} xl={{ span: 6, order: 1 }}>
              <div className="section-6-left">
                <div className="section-6-content-wrapper">
                  <p className="tag">CAREERS</p>
                  <h1 className="section-6-heading">
                    Explore your Passion. Create lasting Change.
                  </h1>
                  <p className="section-6-text">
                    Work with us - and transform your career while transforming
                    lives. We believe that every individual has a unique story
                    to tell and we are passionate about capturing it.
                  </p>
                  <div className="section-6-button">
                    <a className="button-fancy -white" href="#?">
                      <span className="arrow"></span>
                      <span className="text">Explore opportunities</span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} xl={{ span: 6, order: 2 }}>
              <div className="section-6-right">
                <LazyLoadImage
                  className="banner-img"
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  placeholderSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="banner Abstract Icon"
                  effect="blur"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-6-footer">
        <a href="#?">
          OUR CULTURE
        </a>
        <a href="#?">
          EXPLORE OPPORTUNITIES
        </a>
        <a href="#?">
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
};

export default Careers;
