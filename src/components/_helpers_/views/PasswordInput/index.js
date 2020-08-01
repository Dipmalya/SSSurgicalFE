import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { StyledPasswordInput } from './view';
import styled from 'styled-components';

const StyledIcon = styled.i`
    margin-left: -25px;
    cursor: pointer;
`;

class PasswordInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            value: this.props.value,
            type: 'password'
        }
    }

    togglePassword = () => {
        const { type } = this.state;
        if (type === 'password') {
            this.setState({ type: 'text' });
        } else {
            this.setState({ type: 'password' });
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        const { name, value } = this.state;
        this.props.onChange({ name, value });
    }

    render() {
        const {
            value,
            type
        } = this.state;
        return (
            <div>
                <StyledPasswordInput
                    type={type}
                    value={value}
                    onChange={this.handleChange}
                />
                <StyledIcon 
                    className={type === 'password' ? "fa fa-eye" : "fa fa-eye-slash"} 
                    onClick={this.togglePassword}
                />
            </div>
        )
    }
}

PasswordInput.defaultProps = {
    id: '',
    name: 'password',
    value: 'abcdef',
    onChange: () => {}
}

PasswordInput.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.shape(),
    onChange: PropTypes.func
}

export default PasswordInput
