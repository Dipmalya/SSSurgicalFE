import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from '../../config/actionTypes';

export const viewProduct = (state = [], { type, payload }) => {
    switch(type) {
        case GET_PRODUCT_SUCCESS: {
            return payload
        };
        case GET_PRODUCT_FAILURE: {
            return [];
        }
        default: {
            return state;
        }
    }
}