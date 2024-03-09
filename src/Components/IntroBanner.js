import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";

export const IntroBanner = () => {
  useEffect(() => {
    document.title = "Your vision powered by us | Avadhesh";
  }, []);

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      className="section-1 banner">
      <Row className="m-0">
        <Col xs={{ span: 12, order: 2 }} md={12} xl={{ span: 6, order: 1 }}>
          <div className="section-1-left">
            <div className="content-wrapper">
              <h1 className="section-1-heading">
                Transformation starts with your people.
              </h1>
              <p className="section-1-text">
                We believe that every individual has a unique story to tell and
                we are passionate about capturing it. Our team of experienced
                photographers will We believe in the transformative potential of
                every individual and team member. Our goal is to create a
                workplace where individuals can grow professionally We believe
                that every individual has a unique story to tell and we are
                passionate about capturing it through our work.
              </p>
              <h3 className="section-1-subhead">
                Powering confident decisions, for life.
              </h3>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={12} xl={{ span: 6, order: 2 }} className="p-0">
          <div className="section-1-right">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop={true}
              style={{ width: "-webkit-fill-available" }}
            >
              <source
                src="https://scottaohara.github.io/testing/big_buck_bunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="section-1-button-wrapper">
              <button
                onClick={togglePlayPause}
                className={`section-1-btn ${isPlaying ? "pause" : "play"}`}
              ></button>
            </div>
          </div>
        </Col>
      </Row>
      <div className="anim-container">
	<div className="field">
		<a href="#section9"><div className="scroll"></div></a>
	</div>
</div>
    </section>
    
  );
};
