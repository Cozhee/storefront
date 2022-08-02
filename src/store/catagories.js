const initialState = {
    categories: [
        {name: 'Bats', displayName: 'Baseball Bats', desc: 'Used to hit baseballs very far'},
        {name: 'Hats', displayName: 'Ball Caps', desc: 'Keeps the sun out of your eyes'},
        {name: 'Cleats', displayName: 'Cleats', desc: 'Helps with traction when running on dirt'}
    ],
    activeCategory: 'Baseball Bat'
}

function categoryReducer(state = initialState, action) {
    let { type, payload } = action

    switch(type) {
        case 'HATS':
            return {
                ...state, activeCategory: 'Baseball Cap'
            }

        case 'CLEATS':
            return {
                ...state, activeCategory: 'Cleats'
            }

        case 'BATS':
            return {
                ...state, activeCategory: 'Baseball Bat'
            }

        case 'CLEAR':
            return initialState

        default:
            return state
    }
}

export const newActive = (category) => {
    console.log(category)
    return {
        type: category
    }
}

export const reset = () => {
    return {
        type: 'CLEAR'
    }

}

export default categoryReducer