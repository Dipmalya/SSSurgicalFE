import { UPDATE_CART, DELETE_CART_ITEM } from "../../config/actionTypes";

export const updateCart = payload => ({
    type: UPDATE_CART,
    payload
});

export const deleteItemFromCart = id => ({
    type: DELETE_CART_ITEM,
    payload: id
})