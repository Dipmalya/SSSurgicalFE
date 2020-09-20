import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block" width="98%" height="500px" src="https://conductscience.com/wp-content/uploads/2019/05/SP0007-R_group.jpg" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First Slide</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" width="98%" height="500px" src="https://www.dbio.eu/images/Mouse-surgical-Kit_thumb.jpg" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second Slide</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block" width="98%" height="500px" src="https://5.imimg.com/data5/IF/FB/NF/SELLER-78224736/6-500x500.jpg" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third Slide</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

Carousel.defaultProps = {}

Carousel.propTypes = {}

export default Carousel;
