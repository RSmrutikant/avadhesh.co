import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FirstBanner = () => {
  return (
    <div>
      <div className="section-9 first-banner">
        <Container>
          <Row>
          <Col xs={12} md={6} xl={6}>
              <div className="section-9-left">
                <LazyLoadImage
                  className="banner-img"
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  placeholderSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  effect="blur"
                />
              </div>
            </Col>
            <Col xs={12} md={6} xl={6}>
              <div className="section-9-right">
                <div className="section-9-content-wrapper">
                  <h1 className="section-9-heading">
                    Explore your Passion. Create lasting Change.
                  </h1>
                  <p className="section-9-text">
                    Work with us - and transform your career while transforming
                    lives. We believe that every individual has a unique story
                    to tell and we are passionate about capturing it. We believe that every individual has a unique story to tell and we are passionate about capturing it. Our team of experienced photographers will We believe in the transformative potential of every individual and team member. Our goal is to create a workplace where individuals can grow professionally We believe that every individual has a unique story to tell and we are passionate about capturing it through our work.
                  </p>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FirstBanner;
