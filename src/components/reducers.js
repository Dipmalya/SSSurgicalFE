import { combineReducers } from 'redux';
import { categoryList, userData } from './Home/reducer';
import { viewProduct } from './Product/reducer';
import { cartItem } from './Item/reducer';

const rootReducer = combineReducers({
    categoryList,
    viewProduct,
    userData,
    cartItem
});

export default rootReducer