import { createStore, combineReducers } from 'redux'
import categoryReducer from './catagories'

let reducers = combineReducers({
    categories: categoryReducer
})

export default function store() {
    return createStore(reducers)
}