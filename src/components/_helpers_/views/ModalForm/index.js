import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../Input";

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile: "",
      email: "",
      password: "",
      login: true,
      error: true,
      register: false,
    };
  }

  static getDerivedStateFromProps({ errorMessage }, state) {
    const { login, register, email, password, name } = state;
    if (login) {
      return { error: email === "" || password === "", errorMessage };
    }
    if (register) {
      return {
        error:
          email === "" || password === "" || name === "" || password === "",
        errorMessage
      };
    }
  }

  handleLogin = () => {
    const { email, password, error } = this.state;
    const { onLogin, proceedFurther, addToCart, itemId } = this.props;
    if (!error) {
      onLogin({ email, password }, () => {
        addToCart(itemId.split("/").pop());
        proceedFurther();
      });
    }
  };

  handleRegister = () => {
    const { name, mobile, email, password, error } = this.state;
    const { onRegister } = this.props;
    if (!error) {
      onRegister({ name, mobile, email, password }, () => this.handleLogin());
    }
  };

  changeField = ({ name, value, error }) => {
    this.setState({
      [name]: value,
      error,
    });
  };

  render() {
    const {
      login,
      register,
      email,
      password,
      name,
      mobile,
      error,
      errorMessage
    } = this.state;
    const { closeRegistration } = this.props;
    return (
      <div className="my-md-3 mt-lg-0 mr-3 px-3">
        <div className="row alert alert-warning" role="alert">
          <div className="col-md-11 col-10">
            To add an item to cart or to buy an item, kindly let us know who you
            are.
            <br />
            Adding your details would help us process your order and notify you
            about the invoice
          </div>
          <div className="col-md-1 col-2">
            <button
              type="button"
              className="close"
              onClick={() => closeRegistration()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        {errorMessage && (
          <div className="alert alert-danger text-center">
            {errorMessage}
            <button
              type="button"
              className="close float-right"
              onClick={() => this.props.removeError()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <div className="px-md-5">
          {login && (
            <>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <br />
                <Input
                  name="email"
                  value={email}
                  onChange={this.changeField}
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <br />
                <Input
                  name="password"
                  value={password}
                  onChange={this.changeField}
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="py-2">
                Not a member yet?
                <div
                  className="btn"
                  onClick={() => {
                    this.setState({ login: false, register: true });
                    this.props.removeError();
                  }}
                >
                  <strong style={{ textDecoration: "underline" }}>
                    Please Register
                  </strong>
                </div>
              </div>
              <div className="row mt-3 mb-5">
                <button
                  disabled={error}
                  type="button"
                  class="col-md-2 btn btn-primary mr-md-3 mb-md-0 mb-2"
                  onClick={this.handleLogin}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  class="col-md-3 btn btn-secondary"
                  onClick={() => closeRegistration()}
                >
                  May be later
                </button>
              </div>
            </>
          )}
          {register && (
            <>
              <div class="form-group">
                <label for="exampleInputName1">Name</label>
                <br />
                <Input
                  name="name"
                  value={name}
                  onChange={this.changeField}
                  type="text"
                  class="form-control"
                  id="exampleInputName1"
                  aria-describedby="nameHelp"
                  placeholder="Enter name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputMobile1">Mobile</label>
                <br />
                <Input
                  name="mobile"
                  value={mobile}
                  onChange={this.changeField}
                  type="tel"
                  class="form-control"
                  id="exampleInputMobile1"
                  aria-describedby="emailHelp"
                  placeholder="Enter mobile"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We won't bother you unless absolute necessary.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <br />
                <Input
                  name="email"
                  value={email}
                  onChange={this.changeField}
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <br />
                <Input
                  name="password"
                  value={password}
                  onChange={this.changeField}
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="py-2">
                Already registered?
                <div
                  className="btn"
                  onClick={() => {
                    this.setState({ login: true, register: false });
                    this.props.removeError();
                  }}
                >
                  <strong style={{ textDecoration: "underline" }}>
                    Please sign in
                  </strong>
                </div>
              </div>
              <div className="row mt-3 mb-5">
                <button
                  disabled={error}
                  type="button"
                  class="col-md-2 btn btn-primary mr-md-3 mb-md-0 mb-2"
                  onClick={this.handleRegister}
                >
                  Register
                </button>
                <button
                  type="button"
                  class="col-md-3 btn btn-secondary"
                  onClick={() => closeRegistration()}
                >
                  May be later
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

ModalForm.defaultProps = {
  proceedFurther: () => {},
};

ModalForm.propTypes = {
  proceedFurther: PropTypes.func,
};

export default ModalForm;
