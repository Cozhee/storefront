const initialState = [
        {category: 'Bats', name: 'Easton', type: 'Aluminum ', price: 939.99},
        {category: 'Bats', name: 'Louisville Slugger', type: 'Wood', price: 199.99},
        {category: 'Bats', name: 'Demarini', type: 'Aluminum ', price: 69.99},
        {category: 'Hats', name: 'New York Yankess', type: 'Navy Blue', price: 99.99},
        {category: 'Hats', name: 'Boston Red Sox', type: 'Red/White', price: 939.99},
        {category: 'Hats', name: 'Seattle Mariners', type: 'Navy Blue/White', price: 929.99},
        {category: 'Cleats', name: 'Nike', type: 'Metal', price: 12.99},
        {category: 'Cleats', name: 'Mizuno', type: 'Rubber', price: 10.99},
        {category: 'Cleats', name: 'Under Armour', type: 'Metal', price: 199.99},
    ]


function productReducer(state = initialState, action) {

    let { type, payload } = action

    switch(type) {
        case 'GET PRODUCT':
            return state.products.filter(product => product.category === payload.name)
        default:
            return state
    }

}

export default productReducer