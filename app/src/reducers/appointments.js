import constants from "../constants/constants"

const appointments = (state = [], action) => {
    switch (action.type) {
        case constants.RECEIVE_APPOINTMENTS:
            return action.data
        default:
            return state
    }
}

export default appointments
