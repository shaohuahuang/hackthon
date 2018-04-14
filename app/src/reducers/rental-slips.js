import constants from "../constants/constants"

const rentalSlips = (state = {}, action) => {
    switch (action.type) {
        case constants.RECEIVE_RENTAL_SLIPS:
            return action.data
        case constants.ADD_ITEM_SUCCESS:
            const nextState = { ...state }
            const { month, ...item } = action.data
            if (nextState[month]) {
                nextState[month].push(item)
            } else {
                nextState[month] = [item]
            }
            return nextState
        default:
            return state
    }
}

export default rentalSlips
