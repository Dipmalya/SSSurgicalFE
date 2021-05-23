import { ADD_CART, EMPTY_CART } from "../../config/actionTypes";

export const addToCart = item => ({
    type: ADD_CART,
    payload: item
});

export const emptyCart = () => ({
    type: EMPTY_CART,
    payload: []
});