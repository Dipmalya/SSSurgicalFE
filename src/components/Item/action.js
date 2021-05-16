import { ADD_CART } from "../../config/actionTypes";

export const addToCart = item => ({
    type: ADD_CART,
    payload: item
})