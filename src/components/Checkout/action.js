import axios from 'axios';
import { URL } from "../../config/endpoints";
import { UPDATE_CART, DELETE_CART_ITEM } from "../../config/actionTypes";

const { ORDER_ITEM } = URL;

export const updateCart = (payload) => ({
  type: UPDATE_CART,
  payload,
});

export const deleteItemFromCart = (id) => ({
  type: DELETE_CART_ITEM,
  payload: id,
});

export const orderItem = (orderObj, callback) => {
  return () => {
    axios
      .post(ORDER_ITEM, orderObj)
      .then(({ data }) => {
        if (callback && data.success) {
          callback();
        }
      })
      .catch((res) => console.error(res));
  };
};
