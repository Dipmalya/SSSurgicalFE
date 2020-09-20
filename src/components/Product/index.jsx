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

    goToHomePage = () => this.props.redirectUrl(`/`);

    render() {
        const { products } = this.state;
        return (
            <div className="mt-md-3 mt-lg-0 zIndex-1">
                <div className="d-flex">
                    <h3 className="mb-3">Sub Category</h3>
                    <button className="home-icon mr-md-3 btn" onClick={this.goToHomePage}>
                        <i className="fa fa-home"></i>
                    </button>
                </div>
                <>
                    {
                        products.map(item => (
                            <div className="mb-3 mr-3" key={item}>
                                <ItemCard id={item} cardClickHandler={this.handleCardClick} />
                            </div>
                        ))
                    }
                </>
            </div>
        )
    }
}

export default Layout(Product);