import { ADD_CART, UPDATE_CART, DELETE_CART_ITEM } from "../../config/actionTypes";

export const cartItem = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CART: {
      const { quantity = 1, itemId } = state.find(item => item.itemId === payload.itemId) || {};
      if (itemId) {
        state.forEach(item => {
          if (item.itemId === itemId) {
            item.quantity++;
          }
        });
        return state;
      }
      return [...state, { ...payload, quantity }];
    }
    case UPDATE_CART: {
      const { itemId, value: quantity } = payload;
      state.forEach((item, index) => {
        if (item.itemId === itemId) {
          item.quantity = quantity;
        }
      });
      return state;
    }
    case DELETE_CART_ITEM: {
      return state.filter(data => data.itemId !== payload);
    }
    default: {
      return state;
    }
  }
};
