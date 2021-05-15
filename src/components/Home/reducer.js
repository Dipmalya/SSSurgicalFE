import { GET_CATORY_SUCCESS, GET_CATORY_FAILURE } from '../../config/actionTypes';

export const categoryList = (state = [], { type, payload }) => {
    switch(type) {
        case GET_CATORY_SUCCESS: {
            return payload
        };
        case GET_CATORY_FAILURE: {
            return [];
        }
        default: {
            return state;
        }
    }
}