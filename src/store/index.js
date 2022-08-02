import { createStore, combineReducers } from 'redux'
import categoryReducer from './catagories'
import productReducer from './products'
import cartReducer from "./cart";

let reducers = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer
})

export default function store() {
    return createStore(reducers)
}