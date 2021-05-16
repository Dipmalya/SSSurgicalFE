import axios from "axios";
import { URL } from "../../config/endpoints";
import {
  GET_CATORY_SUCCESS,
  GET_CATORY_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../../config/actionTypes";

const { GET_CATEGORY_LIST, LOGIN_USER } = URL;

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

export const loginUser = (loginObj, callback) => {
  return dispatch => {
    axios
      .post(LOGIN_USER, loginObj)
      .then((res) => {
        dispatch(loginSuccess(res.data));
        if (callback) {
          callback();
        }
      })
      .catch((res) => dispatch(loginFailure(res.data)));
  };
}

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const logoutUser = () => ({
  type: LOGOUT,
  payload: {}
})
