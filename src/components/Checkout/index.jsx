import React, { Component } from "react";
import Layout from "../_helpers_/HOC/LayoutWrapper";
import { ItemCard, Input } from "../_helpers_/views";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  static getDerivedStateFromProps({ cartItem }) {
    return {
      products: cartItem,
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div className="mt-md-3 mt-lg-0 zIndex-1">
        <div className="d-flex">
          <h3 className="mb-3">Checking out</h3>
        </div>
        {products.length === 0 && (
          <div className="jumbotron jumbotron-fluid mr-2 mb-8">
            <div className="container">
              <h1 className="display-4">Your cart is empty!!</h1>
              <p className="lead">
                Please add something in your cart or checkout directly, so that
                you can send us a quote.
              </p>
            </div>
          </div>
        )}
        <>
          {products &&
            products.map((item) => (
              <div className="mb-3 mr-3" key={item}>
                <ItemCard
                  {...item}
                  id={item}
                  showDelete={true}
                  checkingOut
                  cardClickHandler={this.handleCardClick}
                  updateCartQuantity={this.props.updateCart}
                  deleteItemFromCart={this.props.deleteItemFromCart}
                />
              </div>
            ))}
        </>
        {products.length > 0 && (
          <div className="mt-5 px-md-3">
            <h5>You don't need to pay right now.</h5>
            <p className="mb-3">
              Once you submit your requirement we will get in touch with you at
              the earliest via your mobile number and/or email and provide you
              our quote.
            </p>
            <div>
              <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <Input
                  type="email"
                  class="form-control"
                  id="exampleInputName1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Mobile</label>
                <Input
                  type="tel"
                  class="form-control"
                  id="exampleInputMobile1"
                  aria-describedby="emailHelp"
                  placeholder="Enter mobile"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We won't bother you unless absolute necessary.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <Input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputAddress1">Full Address</label>
                <textarea
                  className="form-control"
                  placeholder="Your Full Address"
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label for="exampleInputPincode1">Pin code</label>
                <Input
                  type="text"
                  class="form-control"
                  id="exampleInputpin1"
                  aria-describedby="pincodeHelp"
                  placeholder="Enter pin code"
                />
              </div>
              <div className="row my-4 pl-3">
                <button
                  type="button"
                  className="col-md-4 btn btn-primary mr-md-3 mb-md-0 mb-2"
                >
                  Send us your requirement
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Layout(Checkout);
