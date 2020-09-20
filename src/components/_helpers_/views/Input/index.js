import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyledInput } from './view';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            value: this.props.value,
            type: this.props.type,
            className: this.props.class,
            error: false
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
        const { name, value, error } = this.state;
        this.props.onChange({ name, value, error });
    }

    validate = () => {
        const { type, value } = this.state;
        switch (type) {
            case 'email': {
                /* eslint-disable */
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                this.setState({ error: !(re.test(String(value).toLowerCase())) });
            }
        }
    }

    render() {
        const {
            name,
            className,
            value,
            type,
            error
        } = this.state;

        return (
            <StyledInput
                className={className}
                name={name}
                type={type}
                value={value}
                error={error}
                onChange={this.handleChange}
                onBlur={this.validate}
            />
        )
    }
}

Input.defaultProps = {
    id: '',
    name: 'text',
    class: '',
    value: '',
    onChange: () => { }
}

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    class: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.shape(),
    onChange: PropTypes.func
}

export default Input
