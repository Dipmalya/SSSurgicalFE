import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyledCard,
  StyledName,
  StyledCategory,
  StyledPrice,
  StyledImg,
  StyledDesc,
  StyledStatement,
  StyledAction,
} from "./view";

class ItemTable extends Component {
  static getDerivedStateFromProps(props) {
    const { priceGiven, priceSpecs, itemPrice } = props;
    return {
      priceText: priceGiven ? `${itemPrice} / ${priceSpecs}` : false,
    };
  }

  handleAddToCart = () => {
    const { id, addToCartHandler } = this.props;
    addToCartHandler(id);
  };

  handleBuyNow = () => {
    const { id, buyNowHandler } = this.props;
    buyNowHandler(id);
  };

  render() {
    const { priceText } = this.state;
    const {
      imageUrl,
      itemName,
      category,
      itemDesc,
      itemSpecs,
      priceGiven,
      priceStatement,
    } = this.props;
    return (
      <div>
        <StyledCard className="d-md-flex">
          <StyledImg
            src={imageUrl}
            alt={itemName}
            className="col-md-5 p-2"
          ></StyledImg>
          <StyledDesc className="col-md-7 py-4 pl-5">
            <StyledName className="mt-md-3">{itemName}</StyledName>
            <StyledCategory className="mt-3">{category}</StyledCategory>
            <StyledStatement className="mt-3">{itemDesc}</StyledStatement>
            {itemSpecs && (
              <StyledStatement className="mt-3">
                <div className="mb-2">
                  <u>Specifications</u>
                </div>
                <ul>
                  {itemSpecs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </StyledStatement>
            )}
            <StyledPrice className="mt-3">
              {priceGiven && (
                <i className="fa fa-inr" aria-hidden="true">
                  &nbsp;{priceText}
                </i>
              )}
            </StyledPrice>
            {!priceGiven && (
              <StyledStatement className="mt-3">
                {priceStatement}
              </StyledStatement>
            )}
            <StyledAction>
              <button
                className="w-auto btn btn-secondary my-4 mr-5"
                onClick={this.handleAddToCart}
              >
                Add to cart
              </button>
              <button className="btn btn-info my-3" onClick={this.handleBuyNow}>
                Buy now
              </button>
            </StyledAction>
          </StyledDesc>
        </StyledCard>
      </div>
    );
  }
}

ItemTable.defaultProps = {
  id: "1",
  itemName: "",
  itemCategory: "",
  itemDesc: "",
  name: "item-card",
  imageUrl: "",
  priceGiven: false,
  priceSpecs: false,
  priceStatement: "",
  itemSpecs: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, soluta?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, soluta?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, soluta?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, soluta?",
  ],
  addToCartHandler: () => {},
};

ItemTable.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  itemName: PropTypes.string,
  itemCategory: PropTypes.string,
  itemDesc: PropTypes.string,
  itemSpecs: PropTypes.array,
  itemPrice: PropTypes.string,
  priceStatement: PropTypes.string,
  priceSpecs: PropTypes.string,
  disabled: PropTypes.bool,
  priceGiven: PropTypes.bool,
  theme: PropTypes.shape(),
  buyNowHandler: PropTypes.func,
  addToCartHandler: PropTypes.func,
};

export default ItemTable;
