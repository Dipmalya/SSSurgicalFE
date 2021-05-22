import React, { Component } from "react";
import Layout from "../_helpers_/HOC/LayoutWrapper";
import { ItemTable } from "../_helpers_/views";

class Item extends Component {
  constructor(props) {
    super(props);
    const param = this.props.history.location.pathname.split("/").pop();
    this.state = {
      itemId: param,
      selectedItem: {},
    };
  }

  componentDidMount() {
    const { viewProduct } = this.props;
    const { itemId } = this.state;
    this.setState({
      selectedItem: viewProduct.find((item) => item.itemId === itemId),
    });
  }

  addToCartHandler = (id) => {
    const { isLoggedIn } = this.props;
    const { selectedItem: item } = this.state;
    if (isLoggedIn) {
      this.props.addToCart(item);
      this.props.redirectUrl('/checkout');
    } else {
      this.props.openRegistration();
    }
  };

  render() {
    const { selectedItem: item } = this.state;
    return (
      <div className="my-md-3 mt-lg-0 mr-3">
        <ItemTable
          {...item}
          addToCartHandler={this.addToCartHandler}
          buyNowHandler={this.addToCartHandler}
        />
        <div className="mt-5 mb-3 px-3">
          <h4>Disclaimer</h4>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            molestiae cumque magnam accusamus ipsa dolores minima quod rem,
            voluptatum rerum eveniet fugit deleniti consequuntur placeat labore
            quo, eos sapiente provident consectetur delectus, sed illo dolorum
            corrupti? Ad voluptates atque omnis.
          </div>
        </div>
      </div>
    );
  }
}

export default Layout(Item);
