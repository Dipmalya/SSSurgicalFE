import axios from "axios";
import { URL } from "../../config/endpoints";
import {
  FETCH_USER_SUCCESS,
  GET_CATORY_SUCCESS,
  GET_CATORY_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../../config/actionTypes";

const { GET_CATEGORY_LIST, LOGIN_USER, REGISTER_USER, FETCH_USER } = URL;

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
});

export const registerUser = (registerObj, callback) => {
  return () => {
    axios
      .post(REGISTER_USER, registerObj)
      .then((res) => {
        if (callback && res.data.success) {
          callback();
        }
      })
      .catch((res) => console.error(res));
  };
};

export const fetchUser = userId => {
  return dispatch => {
    axios
      .get(FETCH_USER + userId)
      .then((res) => dispatch(fetUserSuccess(res.data)))
      .catch((res) => console.error(res));
  };
};

const fetUserSuccess = payload => ({
  type: FETCH_USER_SUCCESS,
  payload,
});
