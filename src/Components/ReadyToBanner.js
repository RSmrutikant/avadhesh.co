import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Images from "./imageSet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Images from "../Data/imageSet";

const ReadyToBanner = () => {
  return (
    <div>
      <div className="section-8 ready-to-banner">
        <Container>
          <Row>
          <Col xs={{ span: 12, order: 1 }} md={6} xl={6}>
              <div className="section-8-left">
                <LazyLoadImage
                  className="banner-img"
                  src={Images.finalSVG}
                  placeholderSrc={Images.finalSVG}
                  effect="blur"
                />
              </div>
            </Col>
            <Col xs={{ span: 12, order: 2 }} md={6} xl={6}>
              <div className="section-8-right">
                <div className="section-8-content-wrapper">
                  {/* <p className="tag">CAREERS</p> */}
                  <h1 className="section-8-heading">
                    Explore your Passion. Create lasting Change.
                  </h1>
                  <p className="section-8-text">
                    Work with us - and transform your career while transforming
                    lives. We believe that every individual has a unique story
                    to tell and we are passionate about capturing it.
                  </p>
                  <div className="section-8-button">
                    <a class="button-fancy -white" href="#?">
                      <span class="arrow"></span>
                      <span class="text">Explore opportunities</span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ReadyToBanner;
