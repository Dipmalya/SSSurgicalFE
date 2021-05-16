import React, { Component } from "react";

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
          {
              this.props.isLoggedIn && (
                <>
                <i
                  className="fa fa-sign-out mt-1 mr-md-2 float-right text-white btn"
                  onClick={this.props.onLogout}
                ></i>
                <i
                  className="fa fa-shopping-cart mt-1 mr-md-4 float-right text-white btn"
                  onClick={this.props.goToCart}
                ></i>
              </>
              )
          }
        </nav>
      </div>
    );
  }
}

export default Header;
