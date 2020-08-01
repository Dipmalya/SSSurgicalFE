import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyledCard, StyledName, StyledCategory, StyledPrice, StyledImg } from './view';

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            imageUrl: this.props.imageUrl,
            itemName: this.props.itemName,
            itemCategory: this.props.itemCategory,
            itemPrice: this.props.itemPrice
        }
    }

    render() {
        const {
            imageUrl,
            itemName,
            itemCategory,
            itemPrice
        } = this.state;
        return (
            <div>
                <StyledCard>
                    <StyledImg src={imageUrl} alt={itemName} ></StyledImg>
                    <StyledName>{itemName}</StyledName>
                    <StyledCategory>{itemCategory}</StyledCategory>
                    <StyledPrice>{`Rs. ${itemPrice}`}</StyledPrice>
                </StyledCard>
            </div>
        )
    }
}

ItemCard.defaultProps = {
    id: '',
    name: 'item-card',
    imageUrl: 'https://www.w3schools.com/howto/img_avatar.png',
    onClick: () => {}
}

ItemCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    itemName: PropTypes.string,
    itemCategory: PropTypes.string,
    itemPrice: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.shape(),
    onChange: PropTypes.func
}

export default ItemCard
