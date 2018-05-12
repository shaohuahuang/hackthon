// @flow
import constants from "../constants/constants"

const receiveOutstandings = outstandings => ({
    type: constants.RECEIVE_OUTSTANDINGS,
    data: outstandings
})

export const fetchOutstandings = (): Function => dispatch =>
    fetch("/api/outstandings")
        .then((response: Object) => response.json())
        .then((data: Object) => {
            dispatch(receiveOutstandings(data))
        })
