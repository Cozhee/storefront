const initialState = {
    categories: [
        {name: 'Bats', displayName: 'Baseball Bats', desc: 'Used to hit baseballs very far'},
        {name: 'Hats', displayName: 'Ball Caps', desc: 'Keeps the sun out of your eyes'},
        {name: 'Cleats', displayName: 'Cleats', desc: 'Helps with traction when running on dirt'}
    ],
    activeCategory: ''
}

function categoryReducer(state = initialState, action) {
    let { type, payload } = action

    switch(type) {
        case 'SELECT_CATEGORY':
            return {
                ...state, activeCategory: payload
            }
        default:
            return state
    }
}

export const newActive = (category) => {
    console.log(category)
    return {
        type: 'SELECT_CATEGORY',
        payload: category
    }
}

export const reset = () => {
    return {
        type: 'CLEAR'
    }

}

export default categoryReducer