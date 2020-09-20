import React, { Component } from "react";
import Layout from "../_helpers_/HOC/LayoutWrapper";
import { ItemTable } from "../_helpers_/views";

class Item extends Component {
  addToCartHandler = (id) => {
    const isLoggedIn = this.props.checkLogin;
    if(isLoggedIn) {
        this.props.addToCart(id, this.props.redirectUrl('/cart'))
    } else {
        this.props.openRegistration();
    }
  }

  buyNowHandler = (id) => {
    const isLoggedIn = this.props.checkLogin;
    if(isLoggedIn) {
        this.props.buyNow(id, this.props.redirectUrl('/checkout/id'))
    } else {
        this.props.openRegistration(id);
    }
  }

  render() {
    const item = {
      id: "1",
      itemName: "Mock Item Name",
      itemCategory: "Mock Item Category",
      itemDesc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officia quidem, dolores incidunt ducimus, vel repudiandae excepturi molestiae, expedita eos fugiat ut eaque repellendus ipsum.",
      name: "item-card",
      imageUrl:
        "https://www.alimed.com/_resources/cache/images/product/98FCP47-1_1000x1000-pad.jpg",
      itemSpecs: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, soluta?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, soluta?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, soluta?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, soluta?",
      ],
      itemPrice: "500",
      priceSpecs: "piece",
      priceGiven: false,
      priceStatement:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam optio laudantium odit! Veritatis, at enim.",
    };
    return (
      <div className="my-md-3 mt-lg-0 mr-3">
        <ItemTable
          {...item}
          addToCartHandler={this.addToCartHandler}
          buyNowHandler={this.buyNowHandler}
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
