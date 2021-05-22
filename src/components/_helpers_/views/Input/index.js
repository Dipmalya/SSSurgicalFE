import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./view";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      value: this.props.value,
      type: this.props.type,
      className: this.props.class,
      placeholder: this.props.placeholder,
      pattern: this.props.pattern,
      errorMessage: this.props.errorMessage,
      error: false,
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    const { name, value, error } = this.state;
    this.props.onChange({ name, value, error });
  };

  validate = () => {
    const { name, type, value, pattern = "" } = this.state;
    let error = false;
    switch (type) {
      case "email": {
        /* eslint-disable */
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        error = !re.test(String(value).toLowerCase());
        break;
      }
      case "text": {
        if (!value.match(pattern) || value === "") error = true;
        break;
      }
      case "tel": {
        if (value === "" || value.length !== 10) error = true;
        break;
      }
      case "password": {
        if (value === "") error = true;
        break;
      }
    }
    this.setState({ error });
    this.props.onChange({ name, value, error });
  };

  render() {
    const { name, className, value, type, placeholder, error, errorMessage } = this.state;

    return (
      <>
        <StyledInput
          className={className}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          error={error}
          onChange={this.handleChange}
          onBlur={this.validate}
        />
        {error && <small className="text-danger">
            {errorMessage}
        </small>}
      </>
    );
  }
}

Input.defaultProps = {
  id: "",
  name: "text",
  class: "",
  value: "",
  type: "",
  pattern: "",
  errorMessage: "Please enter valid details",
  onChange: () => {},
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  class: PropTypes.string,
  value: PropTypes.string,
  pattern: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  theme: PropTypes.shape(),
  onChange: PropTypes.func,
};

export default Input;
