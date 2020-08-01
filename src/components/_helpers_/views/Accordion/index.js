import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyledTab, StyledPanel, StyledItem } from './view';
import styled from 'styled-components';

const StyledIcon = styled.i`
    color: #FFF;
    float: right;
    margin: 0px 5px 2px 0px;
    font-size: 22px;
    cursor: pointer;
`;

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPanel: false,
            item: this.props.item
        }
    }

    toggleArrow = () => {
        const { showPanel } = this.state;
        this.setState({ showPanel: !showPanel });
    }

    handleSubCategoryClick = (link) => {
        this.props.onSubCategoryClick(link);
    }

    render() {
        const {
            showPanel,
            item: {
                category = '',
                options = []
            }
        } = this.state;

        return (
            <div>
                <StyledTab onClick={this.toggleArrow}>
                    {category}
                    <StyledIcon
                        className={showPanel ? 'fa fa-caret-up' : 'fa fa-caret-down'}
                    />
                </StyledTab>
                {showPanel && (
                    <StyledPanel>
                        {
                            options.map((option, index) => {
                                const {
                                    subCategory = '',
                                    link = ''
                                } = option;
                                return (
                                    <StyledItem key={index} onClick={this.handleSubCategoryClick(link)}>
                                        {subCategory}
                                    </StyledItem>
                                )
                            })
                        }
                    </StyledPanel>
                    )
                }
            </div>
        )
    }
}

Accordion.defaultProps = {
    item: {},
    onSubCategoryClick: () => {}
}

Accordion.propTypes = {
    item: PropTypes.shape(),
    onSubCategoryClick: PropTypes.func
}

export default Accordion
