import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="d-block navbar navbar-expand-sm bg-secondary navbar-dark">
                    <i 
                        className="fa fa-bars text-white mr-md-4 mr-2 btn" 
                        onClick={this.props.toggleBar}
                    ></i>
                    <a className="navbar-brand" href="#">
                        <img src="./logo.png" height="22.5px" width="200px"></img>
                    </a>
                </nav>
            </div>
        )
    }
}

Header.defaultProps = {}

Header.propTypes = {}

export default Header;
