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
} from "./view";
import NumberInput from "../NumberInput";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      imageUrl: this.props.imageUrl,
      itemName: this.props.itemName,
      itemCategory: this.props.itemCategory,
      itemDesc: this.props.itemDesc,
      itemPrice: this.props.itemPrice,
    };
  }

  static getDerivedStateFromProps(props) {
    return {
      name: props.name,
      imageUrl: props.imageUrl,
      itemName: props.itemName,
      itemCategory: props.category,
      itemDesc: props.itemDesc,
      itemPrice: props.itemPrice,
    };
  }

  handleClick = () => {
    const { itemId, cardClickHandler } = this.props;
    cardClickHandler(itemId);
  };

  render() {
    const {
      imageUrl,
      itemName,
      itemCategory,
      itemDesc,
      itemPrice,
    } = this.state;
    const { checkingOut } = this.props;
    return (
      <div>
        <StyledCard className="d-md-flex" onClick={this.handleClick}>
          <StyledImg
            src={imageUrl}
            alt={itemName}
            className="col-md-3 p-0"
          ></StyledImg>
          <StyledDesc className="col-md-9">
            <StyledName className="mt-md-3 pt-2">{itemName}</StyledName>
            <StyledCategory className="mt-3">{itemCategory}</StyledCategory>
            {!checkingOut && (
              <StyledStatement className="mt-3">{itemDesc}</StyledStatement>
            )}
            <StyledPrice>{itemPrice ? `Rs. ${itemPrice}` : ""}</StyledPrice>
            {checkingOut && (
              <div className="pb-3">
                <NumberInput />
              </div>
            )}
          </StyledDesc>
        </StyledCard>
      </div>
    );
  }
}

ItemCard.defaultProps = {
  itemId: "1",
  itemName: "Mock Item Name",
  category: "Mock Item Category",
  itemDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  name: "item-card",
  imageUrl:
    "https://www.alimed.com/_resources/cache/images/product/98FCP47-1_1000x1000-pad.jpg",
  cardClickHandler: () => {},
  checkingOut: false,
};

ItemCard.propTypes = {
  itemId: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  itemName: PropTypes.string,
  category: PropTypes.string,
  itemDesc: PropTypes.string,
  itemPrice: PropTypes.string,
  disabled: PropTypes.bool,
  checkingOut: PropTypes.bool,
  theme: PropTypes.shape(),
  cardClickHandler: PropTypes.func,
};

export default ItemCard;
