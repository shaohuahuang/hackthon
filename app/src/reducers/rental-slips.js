import constants from "../constants/constants"
import rentalSlipsByMonth from "./rental-slips-by-month"

const rentalSlips = (state = {}, action) => {
    switch (action.type) {
        case constants.RECEIVE_RENTAL_SLIPS:
            return action.data
        case constants.ADD_ITEM_SUCCESS:
        case constants.DELETE_ITEM_SUCCESS:
        case constants.UPDATE_ITEM_SUCCESS:
            const nextState = { ...state }
            const { rental_month } = action.data
            nextState[rental_month] = rentalSlipsByMonth(
                nextState[rental_month] ? nextState[rental_month] : [],
                action
            )
            return nextState
        default:
            return state
    }
}

export default rentalSlips
