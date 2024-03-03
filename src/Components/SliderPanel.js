import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const SliderPanel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
    return (
      <div className="section-2 slider-container">
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-wrapper">
          <Carousel.Item>
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="slider-btn">
              Know More
            </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="slider-btn">
              Know More
            </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <div className="slider-btn">
              Know More
            </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default SliderPanel;
