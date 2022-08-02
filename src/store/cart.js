const initialState = []

function cartReducer(state = initialState, action) {
    let { type, payload } = action
    switch(type) {
        case 'ADD':
            return [...state, payload]
        default:
            return state
    }

}

export const addToCart = (item) => {
    return {
        type: 'ADD',
        payload: item
    }
}

export default cartReducer