import constants from "../constants/constants"

const outstandings = (state = {}, action) => {
    switch (action.type) {
        case constants.RECEIVE_OUTSTANDINGS:
            return action.data
        default:
            return state
    }
}

export default outstandings
