import constants from "../constants/constants"

export const selectRentalMonth = month => ({
    type: constants.SELECT_RENTAL_MONTH,
    rental_month: month
})

export const selectItem = item => ({
    type: constants.SELECT_ITEM,
    item
})
