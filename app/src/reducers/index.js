import { combineReducers } from "redux"
import rentalSlips from "./rental-slips"
import dialog from "./dialog"

const appData = combineReducers({
    rentalSlips,
    dialog
})

export default appData
