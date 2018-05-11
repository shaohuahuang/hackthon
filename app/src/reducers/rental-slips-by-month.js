import constants from "../constants/constants"

const rentalSlipsByMonth = (state = [], action) => {
    let nextState = [...state]
    const item = action.data

    switch (action.type) {
        case constants.ADD_ITEM_SUCCESS:
            nextState.push(item)
            return nextState
        case constants.DELETE_ITEM_SUCCESS:
            nextState = nextState.filter(m => item.id !== m.id)
            return nextState
        case constants.UPDATE_ITEM_SUCCESS:
            const index = nextState.findIndex(m => item.id === m.id)
            nextState[index] = item
            return nextState
        default:
            return state
    }
}

export default rentalSlipsByMonth
