import constants from "../constants/constants"

const rentalSlips = (state = {}, action) => {
    switch (action.type) {
        case constants.RECEIVE_RENTAL_SLIPS:
            return action.data
        default:
            return state
    }
}

export default rentalSlips
