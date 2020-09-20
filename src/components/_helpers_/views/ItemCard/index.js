import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyledCard, StyledName, StyledCategory, StyledPrice, StyledImg, StyledDesc, StyledStatement } from './view';

class ItemCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            imageUrl: this.props.imageUrl,
            itemName: this.props.itemName,
            itemCategory: this.props.itemCategory,
            itemDesc: this.props.itemDesc,
            itemPrice: this.props.itemPrice
        }
    }

    handleClick = () => {
        const { id, cardClickHandler } = this.props;
        cardClickHandler(id);
    }

    render() {
        const {
            imageUrl,
            itemName,
            itemCategory,
            itemDesc,
            itemPrice
        } = this.state;
        return (
            <div>
                <StyledCard className="d-md-flex" onClick={this.handleClick}>
                    <StyledImg src={imageUrl} alt={itemName} className="col-md-3 p-0"></StyledImg>
                    <StyledDesc className="col-md-9">
                        <StyledName className="mt-md-3">{itemName}</StyledName>
                        <StyledCategory className="mt-3">{itemCategory}</StyledCategory>
                        <StyledStatement className="mt-3">{itemDesc}</StyledStatement>
                        <StyledPrice>{itemPrice ? `Rs. ${itemPrice}` : ''}</StyledPrice>
                    </StyledDesc>
                </StyledCard>
            </div>
        )
    }
}

ItemCard.defaultProps = {
    id: '1',
    itemName: 'Mock Item Name',
    itemCategory: 'Mock Item Category',
    itemDesc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis officia quidem, dolores incidunt ducimus, vel repudiandae excepturi molestiae, expedita eos fugiat ut eaque repellendus ipsum.',
    name: 'item-card',
    imageUrl: 'https://www.alimed.com/_resources/cache/images/product/98FCP47-1_1000x1000-pad.jpg',
    cardClickHandler: () => {}
}

ItemCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    itemName: PropTypes.string,
    itemCategory: PropTypes.string,
    itemDesc: PropTypes.string,
    itemPrice: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.shape(),
    cardClickHandler: PropTypes.func
}

export default ItemCard
