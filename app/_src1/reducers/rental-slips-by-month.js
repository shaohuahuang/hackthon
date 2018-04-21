import constants from "../constants/constants"

const rentalSlipsByMonth = (state = [], action) => {
    let nextState = [...state]
    delete action.data.month
    const item = action.data

    switch (action.type) {
        case constants.ADD_ITEM_SUCCESS:
            nextState.push(item)
            return nextState
        case constants.DELETE_ITEM_SUCCESS:
            nextState = nextState.filter(m => item.id !== m.id)
            return nextState
        default:
            return state
    }
}

export default rentalSlipsByMonth
