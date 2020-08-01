import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { StyledNumberInput, Button } from './view';

class NumberInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            value: this.props.value || 1
        }
    }

    handleClick = (event) => {
        const { value } = this.state;
        const buttonType = event.target.innerHTML;
        if (buttonType === '+') {
            this.setState({ value: parseInt(value) + 1 });
        }
        else if (buttonType === '-' && parseInt(value) > 1) {
            this.setState({ value: parseInt(value) - 1 });
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        const { name, value } = this.state;
        this.props.onChange({ name, value });
    }

    render() {
        const {
            value
        } = this.state;
        return (
            <Fragment>
                <Button onClick={this.handleClick}>+</Button>
                <StyledNumberInput
                    readOnly
                    value={value}
                    onChange={this.handleChange}
                />
                <Button style={{padding: '1px 9px 3px 9px'}} onClick={this.handleClick}>-</Button>
            </Fragment>
        )
    }
}

NumberInput.defaultProps = {
    id: '',
    name: 'number-input',
    value: "1",
    onChange: () => {}
}

NumberInput.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.shape(),
    onChange: PropTypes.func
}

export default NumberInput
