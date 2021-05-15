import { combineReducers } from 'redux';
import { categoryList } from './Home/reducer';
import { viewProduct } from './Product/reducer';

const rootReducer = combineReducers({
    categoryList,
    viewProduct
});

export default rootReducer