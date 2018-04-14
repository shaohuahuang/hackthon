import constants from "../constants/constants"

const receiveRentalSlips = rentalSlips => ({
    type: constants.RECEIVE_RENTAL_SLIPS,
    data: rentalSlips
})

export const fetchRentalSlips = () => dispatch =>
    fetch("/api/rental-slips")
        .then(response => response.json())
        .then(data => dispatch(receiveRentalSlips(data)))

const addItemSuccess = ({ month, id, item, amount, date }) => ({
    type: constants.ADD_ITEM_SUCCESS,
    data: { month, id, item, amount, date }
})

export const addItem = ({ month, id, item, amount, date }) => dispatch =>
    fetch("/api/rental-slips", {
        body: JSON.stringify({ month, id, item, amount, date }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(res => {
            if (res.success)
                dispatch(addItemSuccess({ month, id, item, amount, date }))
            else alert(res.error)
        })
