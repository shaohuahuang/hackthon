import constants from "../constants/constants"

const initialState = {
    selectedRentalMonth: "",
    selectedItem: {}
}

const dialog = (state = initialState, action) => {
    switch (action.type) {
        case constants.SELECT_RENTAL_MONTH:
            return { ...state, selectedRentalMonth: action.rental_month }
        case constants.SELECT_ITEM:
            return { ...state, selectedItem: action.item }
        default:
            return state
    }
}

export default dialog
