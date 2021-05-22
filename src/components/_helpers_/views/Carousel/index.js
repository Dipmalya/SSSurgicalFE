import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Carousel extends Component {
  render() {
    const { imageCarousel } = this.props;
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators" style={{zIndex: 1}}>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {imageCarousel.map(data => (
            <div className={data.className}>
              <img
                className="d-block"
                width={data.width}
                height={data.height}
                src={data.imageLink}
                alt={data.altText}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{data.imageHeading}</h5>
                <p>{data.imageSubHeading}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

Carousel.defaultProps = {
  imageCarousel: []
};

Carousel.propTypes = {
  imageCarousel: PropTypes.array
};

export default Carousel;
