import {
  FETCH_USER_SUCCESS,
  GET_CATORY_SUCCESS,
  GET_CATORY_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../../config/actionTypes";

export const categoryList = (state = [], { type, payload }) => {
  switch (type) {
    case GET_CATORY_SUCCESS: {
      return payload;
    }
    case GET_CATORY_FAILURE: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export const userData = (state = {}, { type, payload = {} }) => {
  const { userDoc = {} } = payload;
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("user", userDoc.userId);
      return userDoc;
    }
    case LOGIN_FAILURE: {
      return {};
    }
    case LOGOUT: {
      localStorage.removeItem('user');
      return {};
    }
    case FETCH_USER_SUCCESS: {
      return payload;
    }
    default: {
      return state;
    }
  }
};
