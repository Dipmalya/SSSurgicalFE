import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    StyledCard,
    StyledName,
    StyledCategory,
    StyledPrice,
    StyledImg,
    StyledDesc,
    StyledStatement,
    StyledAction
} from './view';

class ItemTable extends Component {
    constructor(props) {
        super(props);
        const { priceSpecs, itemPrice } = this.props;
        this.state = {
            priceText: priceSpecs ? `${itemPrice} / ${priceSpecs}` : false
        }
    }

    handleClick = () => {
        const { id, cardClickHandler } = this.props;
        cardClickHandler(id);
    }

    render() {
        const { priceText } = this.state;
        const {
            imageUrl,
            itemName,
            itemCategory,
            itemDesc,
            itemSpecs,
            priceGiven,
            priceStatement
        } = this.props;
        return (
            <div>
                <StyledCard className="d-md-flex" onClick={this.handleClick}>
                    <StyledImg src={imageUrl} alt={itemName} className="col-md-5 p-2"></StyledImg>
                    <StyledDesc className="col-md-7 py-4 pl-5">
                        <StyledName className="mt-md-3">{itemName}</StyledName>
                        <StyledCategory className="mt-3">{itemCategory}</StyledCategory>
                        <StyledStatement className="mt-3">{itemDesc}</StyledStatement>
                        {
                            itemSpecs && (
                                <StyledStatement className="mt-3">
                                    <div className="mb-2"><u>Specifications</u></div>
                                    <ul>
                                        {
                                            itemSpecs.map(spec => <li key={spec}>{spec}</li>)
                                        }
                                    </ul>
                                </StyledStatement>
                            )
                        }
                        <StyledPrice className="mt-3">
                            {
                                priceText && (
                                    <i class="fa fa-inr" aria-hidden="true">
                                        &nbsp;{priceText}
                                    </i>
                                )
                            }
                        </StyledPrice>
                        {
                            !priceGiven && (
                                <StyledStatement className="mt-3">{priceStatement}</StyledStatement>
                            )
                        }
                        <StyledAction>
                            <button className="btn btn-secondary my-4 mr-5">Add to cart</button>
                            <button className="btn btn-info my-3">Buy now</button>
                        </StyledAction>
                    </StyledDesc>
                </StyledCard>
            </div>
        )
    }
}

ItemTable.defaultProps = {
    id: '1',
    itemName: '',
    itemCategory: '',
    itemDesc: '',
    name: 'item-card',
    imageUrl: '',
    priceGiven: false,
    priceSpecs: false,
    priceStatement: '',
    itemSpecs: [],
    cardClickHandler: () => { }
}

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
    cardClickHandler: PropTypes.func
}

export default ItemTable
