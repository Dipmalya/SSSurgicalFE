import React, { Component } from 'react';
import Layout from "../_helpers_/HOC/LayoutWrapper";
import { ItemCard } from '../_helpers_/views';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: Array.from(Array(10).keys())
        }
    }

    handleCardClick = (id) => this.props.redirectUrl(`/item/${id}`);

    render() {
        const { products } = this.state;
        return (
            <div className="mt-md-3 mt-lg-0 zIndex-1">
                <h3 className="mb-3 puck-heading">Sub Category</h3>
                {
                    products.map(item => (
                        <div className="mb-3 mr-3" key={item}>
                            <ItemCard id={item} cardClickHandler={this.handleCardClick} />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Layout(Product);