import axios from "axios";
import { URL } from "../../config/endpoints";
import {
  GET_CATORY_SUCCESS,
  GET_CATORY_FAILURE,
} from "../../config/actionTypes";

const { GET_CATEGORY_LIST } = URL;

export const getCategoryList = () => {
  return dispatch => {
    axios
      .get(GET_CATEGORY_LIST)
      .then((res) => dispatch(categoryListSuccess(res.data)))
      .catch((res) => dispatch(categoryListFailure(res.data)));
  };
};

const categoryListSuccess = (payload) => ({
  type: GET_CATORY_SUCCESS,
  payload,
});

const categoryListFailure = (payload) => ({
  type: GET_CATORY_FAILURE,
  payload,
});
