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
        // case constants.DELETE_ITEM_SUCCESS:
        //     return { ...state, selectedItem: {} }
        default:
            return state
    }
}

export default dialog
