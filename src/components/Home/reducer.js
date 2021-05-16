import {
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
  const { token, userDoc } = payload;
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", token);
      localStorage.setItem("user", userDoc.userId);
      return userDoc;
    }
    case LOGIN_FAILURE: {
      return {};
    }
    case LOGOUT: {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return {}
    }
    default: {
      return state;
    }
  }
};
