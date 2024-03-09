import React from "react";
import { Container } from "react-bootstrap";

const InsightBlog = () => {
  return (
    <div className="section-3 insight-blog">
      <h2 className="insight-head">Latest Insights</h2>
      <Container className="insight-wrapper">
        <div className="box one">
          <button className="box-button">
            Report
          </button>
          <h2 className="box-heading">The evolution of technology and data leadership</h2>
          <a href="#?" className="box-content">Read this report <span>⟀</span></a>
        </div>
        <div className="box two">
          <button className="box-button">
            Genrative AI
          </button>
          <h2 className="box-heading">AI-powered digital products</h2>
          <a href="#?" className="box-content">Read this  case study <span>⟀</span></a>
        </div>
        <div className="box three">
          <button className="box-button">
            E-Book
          </button>
          <h2 className="box-heading">Responsible technology playbook</h2>
          <a href="#?" className="box-content">Read this E-book <span>⟀</span></a>
        </div>
        <div className="box four">
          <button className="box-button">
            Podcast
          </button>
          <h2 className="box-heading">Leveraging generative AI at bosch</h2>
          <a href="#?" className="box-content">Listen this <span>⟀</span></a>
        </div>
        <div className="box five">
          <button className="box-button">
            Global Warming
          </button>
          <h2 className="box-heading">World on the way to Global warming</h2>
          <a href="#?" className="box-content">Read this <span>⟀</span></a>
        </div>
        <div className="box six">
          <button className="box-button">
            Future of E-Vehicle
          </button>
          <h2 className="box-heading">Dominance of EV Moto vehicle</h2>
          <a href="#?" className="box-content">Read this <span>⟀</span></a>
        </div>
      </Container>
    </div>
  );
};

export default InsightBlog;
