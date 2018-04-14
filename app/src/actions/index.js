import constants from "../constants/constants"

const receiveRentalSlips = rentalSlips => ({
    type: constants.RECEIVE_RENTAL_SLIPS,
    data: rentalSlips
})

export const fetchRentalSlips = () => dispatch =>
    fetch("/api/rental-slips")
        .then(response => response.json())
        .then(data => dispatch(receiveRentalSlips(data)))
