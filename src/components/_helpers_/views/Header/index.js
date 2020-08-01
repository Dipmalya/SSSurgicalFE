import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="d-block navbar navbar-expand-sm bg-dark navbar-dark">
                    <i className="text-white icon-reorder mr-md-4 mr-2" onClick={this.props.toggleBar}></i>
                    <a className="navbar-brand" href="#">Logo</a>
                </nav>
            </div>
        )
    }
}

Header.defaultProps = {}

Header.propTypes = {}

export default Header;
