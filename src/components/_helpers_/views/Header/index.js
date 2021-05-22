import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
          <div className="row d-md-flex col-lg-10 col-9 pl-lg-2 p-0">
            <i
              className="fa fa-bars text-white mr-md-4 mr-2 mt-2 btn"
              onClick={this.props.toggleBar}
            ></i>
            <a className="d-lg-block d-none navbar-brand" href="#">
              <img src="./logo.png" height="22.5px" width="200px"></img>
            </a>
            <a className="d-block d-lg-none navbar-brand" href="#">
              <img src="./logo.png" height="22.5px" width="150px"></img>
            </a>
          </div>
          {this.props.isLoggedIn && (
            <div className="col-lg-2 col-3 d-md-flex flex-row-reverse px-0">
              <i
                className="fa fa-sign-out mt-1 mr-md-2 float-right text-white btn"
                onClick={this.props.onLogout}
              ></i>
              <i
                className="fa fa-shopping-cart mt-1 mr-md-4 float-right text-white btn"
                onClick={this.props.goToCart}
              ></i>
            </div>
          )}
        </nav>
      </div>
    );
  }
}

export default Header;
