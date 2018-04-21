import constants from "../constants/constants"
import rentalSlipsByMonth from "./rental-slips-by-month"

const rentalSlips = (state = {}, action) => {
    switch (action.type) {
        case constants.RECEIVE_RENTAL_SLIPS:
            return action.data
        case constants.ADD_ITEM_SUCCESS:
        case constants.DELETE_ITEM_SUCCESS:
            const nextState = { ...state }
            const { month } = action.data
            nextState[month] = rentalSlipsByMonth(
                nextState[month] ? nextState[month] : [],
                action
            )
            return nextState
        default:
            return state
    }
}

export default rentalSlips
