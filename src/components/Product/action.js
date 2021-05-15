import axios from "axios";
import { URL } from "../../config/endpoints";
import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from "../../config/actionTypes";

const { GET_ITEM_BY_CATEGORY, GET_ITEM_BY_SUBCATEGORY } = URL;

export const getProductByCategory = id => {
  return (dispatch) => {
    axios
      .get(`${GET_ITEM_BY_CATEGORY}${id}`)
      .then((res) => dispatch(viewProductSuccess(res.data)))
      .catch((res) => dispatch(viewProductFailure(res.data)));
  };
};

export const getProductBySubCategory = id => {
    return (dispatch) => {
      axios
        .get(`${GET_ITEM_BY_SUBCATEGORY}${id}`)
        .then((res) => dispatch(viewProductSuccess(res.data)))
        .catch((res) => dispatch(viewProductFailure(res.data)));
    };
  };

const viewProductSuccess = (payload) => ({
  type: GET_PRODUCT_SUCCESS,
  payload,
});

const viewProductFailure = (payload) => ({
  type: GET_PRODUCT_FAILURE,
  payload,
});
